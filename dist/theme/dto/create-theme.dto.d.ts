import { Theme } from '../../../prisma/generated';
export declare class CreateThemeDto implements Omit<Theme, 'id'> {
    description: string;
    max_count_team: number;
    max_member_in_team: number;
    name: string;
}
