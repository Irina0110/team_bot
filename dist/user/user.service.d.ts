import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma.service";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): import("../../prisma/generated").Prisma.Prisma__UserClient<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    findAll(): import("../../prisma/generated").Prisma.PrismaPromise<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }[]>;
    findOne(id: number): import("../../prisma/generated").Prisma.Prisma__UserClient<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    findTelegramUser(telegram_chat_id: string): import("../../prisma/generated").Prisma.Prisma__UserClient<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    update(id: number, updateUserDto: UpdateUserDto): import("../../prisma/generated").Prisma.Prisma__UserClient<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    remove(id: number): import("../../prisma/generated").Prisma.Prisma__UserClient<{
        id: number;
        telegram_chat_id: string;
        name: string;
        role: import("../../prisma/generated").$Enums.Roles;
        command_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
}
