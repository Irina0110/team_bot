import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
export declare class CommandController {
    private readonly commandService;
    constructor(commandService: CommandService);
    create(createCommandDto: CreateCommandDto): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    findAll(): import("../../prisma/generated").Prisma.PrismaPromise<{
        id: number;
        name: string;
        theme_id: number;
    }[]>;
    findByThemeId(themeId: string): import("../../prisma/generated").Prisma.PrismaPromise<{
        id: number;
        name: string;
        theme_id: number;
    }[]>;
    findOne(id: string): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    update(id: string, updateCommandDto: UpdateCommandDto): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    remove(id: string): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
}
