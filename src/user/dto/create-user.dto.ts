import {$Enums, User} from '../../../prisma/generated'
import {ApiProperty} from "@nestjs/swagger";

// @ts-ignore
export class CreateUserDto implements User {
  @ApiProperty()
  command_id?: number;
  @ApiProperty({required: false})
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  telegram_chat_id: string;
  @ApiProperty()
  role: $Enums.Roles;
}
