const {Telegraf, session} = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('YOUR BOT TOKEN');

bot.use(session());

const userStates = new Map();

const userTeams = new Map();


const keyboard = {
    reply_markup: {
        keyboard: [
            [{text: 'Участник'}],
            [{text: 'Организатор'}]
        ],
        resize_keyboard: true
    }
};


bot.start((ctx) => {
    try {
        axios.get(`http://localhost:1234/api/user/telegram/${ctx.from.id}`).then((response) => {
            if (response.data === '') {
                axios.post(`http://localhost:1234/api/user`, {
                    telegram_chat_id: `${ctx.from.id}`,
                    name: ctx.from.username
                })
            }
        })
    } catch (error) {
        console.log(error)
    }

    ctx.reply('Привет! Я чат-бот для формирования команд на проекты. Выбери свою роль:', keyboard);
});


const keyboard_org = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Посмотреть все темы и параметры', callback_data: 'view_all_theme'}], [{
                text: 'Добавить тему',
                callback_data: 'add_theme'
            }, {
                text: 'Посмотреть команды',
                callback_data: 'view_all_commands'
            }]
        ]
    }
};


bot.on('text', async (ctx) => {
    const text = ctx.message.text;

    if (text === 'Участник') {
        const themes = await axios.get('http://localhost:1234/api/theme/available');
        const buttons = themes.data.map(theme => ({text: theme.name, callback_data: `choose_topic_${theme.id}`}));
        ctx.reply('Вы вошли как участник. Выберите свободную тему:', {
            reply_markup: {
                inline_keyboard: buttons.map((theme) => [theme])
            }
        });
    } else if (text === 'Организатор') {
        ctx.reply('Вы вошли как организатор мероприятия. Выберите дальнейшие действия.', keyboard_org);
    } else {
        const userId = ctx.from.id;
        const message = ctx.message.text;

        // Проверяем, есть ли пользователь в состоянии ожидания
        if (userStates.has(userId)) {
            const state = userStates.get(userId);
            const fields = ['тему', 'описание', 'максимальное количество участников', 'максимальное количество команд']

            // Проверяем, какой тип информации ожидает пользователь, и обновляем соответствующее поле
            switch (state.messages.length) {
                case 0:
                    state.topic = message;
                    break;
                case 1:
                    state.description = message;
                    break;
                case 2:
                    state.maxParticipants = parseInt(message);
                    break;
                case 3:
                    state.maxTeams = parseInt(message);
                    break;
            }

            // Добавляем сообщение в массив состояния пользователя
            state.messages.push(message);
            userStates.set(userId, state);
            fields.splice(0, state.messages.length)

            // Выводим текущую информацию
            const currentInfo = [
                `Тема: ${state.topic}`,
                `Описание: ${state.description || 'не указано'}`, // Добавляем проверку на undefined
                `Максимальное количество участников: ${state.maxParticipants || 'не указано'}`, // Добавляем проверку на undefined
                `Максимальное количество команд: ${state.maxTeams || 'не указано'}` // Добавляем проверку на undefined
            ];
            ctx.reply(`Вы ввели следующую информацию:\n${currentInfo.join('\n')}`);

            // Если пользователь отправил все необходимые сообщения, выполняем команду
            if (state.messages.length === 4) {
                const info = {
                    "name": state.topic,
                    "description": state.description,
                    "max_count_team": state.maxTeams,
                    "max_member_in_team": state.maxParticipants
                };
                await axios.post(`http://localhost:1234/api/theme`, info)
                ctx.reply(`Вы успешно ввели всю информацию.`);
                // Сбрасываем состояние пользователя
                userStates.delete(userId);
            } else {
                ctx.reply(`Осталось ввести еще ${fields.join(', ')}`);
            }
        }

        if (userTeams.has(userId)) {
            const state = userTeams.get(userId);
            const command = message;
            ctx.reply(`Вы создали команду `, command);
            await axios.post(`http://localhost:1234/api/command`, {name: command, theme_id: +state.theme})
            userTeams.delete(userId);
        }
    }


});


bot.action(/choose_topic_(.+)/, async (ctx) => {
    const topic = ctx.match[1];
    ctx.answerCbQuery();
    const commands = await axios.get(`http://localhost:1234/api/command/${topic}`);
    const buttons = commands.data.map(command => ({
        text: command.name,
        callback_data: `choose_command_${command.id}_${topic}`
    }));
    if (commands.data.length === 0) {
        ctx.reply('Команды не найдены', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Создать команду', callback_data: `create_command_${topic}`}]
                ]
            }
        })
    } else {
        ctx.reply('Вы выбрали тему. Выберите команду по этой теме:', {
            reply_markup: {
                inline_keyboard: [buttons]
            }
        });
    }
});


bot.action(/choose_command_(.+)/, async (ctx) => {
    const command = ctx.match[1].split('_')[0];
    ctx.answerCbQuery();
    const user_id = await axios.get(`http://localhost:1234/api/user/telegram/${ctx.from.id}`)
    const resp = await axios.patch(`http://localhost:1234/api/user/${user_id.data.id}`, {command_id: +command})
    ctx.reply('Вы добавлены в команду!');
});

// Обработчик команды "Добавить тему"
bot.action('add_theme', async (ctx) => {
    const userId = ctx.from.id;
    // Устанавливаем состояние пользователя, что он ждет 3 сообщения
    userStates.set(userId, {command: 'button_pressed', messages: []});
    ctx.answerCbQuery('Введите тему, описание, максимальное количество участников и максимальное количество команд разными сообщениями');
    ctx.reply('Введите тему, описание, максимальное количество участников и максимальное количество команд разными сообщениями.');

});

bot.action('view_all_theme', async (ctx) => {
    const themes = await axios.get('http://localhost:1234/api/theme/');
    let replyMessage = 'Вот все доступные темы и их параметры:\n\n';

    themes.data.forEach((theme, index) => {
        replyMessage += `Тема ${index + 1}:\n`;
        replyMessage += `Название: ${theme.name}\n`;
        replyMessage += `Описание: ${theme.description}\n`;
        replyMessage += `Максимальное количество команд: ${theme.max_count_team}\n`;
        replyMessage += `Максимальное количество участников в команде: ${theme.max_member_in_team}\n\n`;
    });

    ctx.reply(replyMessage);

});

bot.action('view_all_commands', async (ctx) => {
    const commands = await axios.get('http://localhost:1234/api/command');
    const themes = await axios.get('http://localhost:1234/api/theme/');
    let replyMessage = 'Вот все команды  и их параметры:\n\n';

    commands.data.forEach((command, index) => {
        replyMessage += `Название: ${command.name}\n`;
        replyMessage += `Тема: ${themes.data.filter((theme) => theme.id == command.theme_id)[0].name}\n\n`;
    });

    ctx.reply(replyMessage);

});


bot.action(/create_command_(.+)/, async (ctx) => {
    // Отправляем запрос на получение сообщения с названием команды
    console.log(ctx.match[1].split('_'))
    userTeams.set(ctx.from.id, {theme: ctx.match[1].split('_')[0]});
    // Ожидаем ответа пользователя
    ctx.answerCbQuery('Введите название команды');
    ctx.reply('Введите название команды');
});


bot.launch();
