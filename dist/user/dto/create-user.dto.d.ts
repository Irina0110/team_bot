import { $Enums, User } from '../../../prisma/generated';
export declare class CreateUserDto implements User {
    command_id?: number;
    id: number;
    name: string;
    telegram_chat_id: string;
    role: $Enums.Roles;
}
