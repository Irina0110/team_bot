import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
export declare class ThemeController {
    private readonly themeService;
    constructor(themeService: ThemeService);
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
    getAvalible(): Promise<({
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
    findOne(id: string): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, null, import("../../prisma/generated/runtime/library").DefaultArgs>;
    update(id: string, updateThemeDto: UpdateThemeDto): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
    remove(id: string): import("../../prisma/generated").Prisma.Prisma__ThemeClient<{
        id: number;
        name: string;
        description: string;
        max_count_team: number;
        max_member_in_team: number;
    }, never, import("../../prisma/generated/runtime/library").DefaultArgs>;
}
