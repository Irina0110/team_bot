import { CreateCommandDto } from './dto/create-command.dto';
import { UpdateCommandDto } from './dto/update-command.dto';
import { PrismaService } from "../prisma.service";
export declare class CommandService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    update(id: number, updateCommandDto: UpdateCommandDto): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    remove(id: number): import("../../prisma/generated").Prisma.Prisma__CommandClient<{
        id: number;
        name: string;
        theme_id: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
}
