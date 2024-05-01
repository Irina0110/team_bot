import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { PrismaService } from "../prisma.service";
export declare class ThemeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createThemeDto: CreateThemeDto): Promise<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }>;
    findAll(): import("../../prisma/generated").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }[]>;
    avalible(): Promise<({
        comand: {
            id: number;
            name: string;
            theme_id: number;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    })[]>;
    findOne(id: number): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    update(id: number, updateThemeDto: UpdateThemeDto): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    remove(id: number): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
}
