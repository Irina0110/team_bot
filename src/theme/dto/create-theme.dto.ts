import {Theme} from '../../../prisma/generated'
import {ApiProperty} from "@nestjs/swagger";

export class CreateThemeDto implements Omit<Theme, 'id'> {
  @ApiProperty()
  description: string;
  @ApiProperty()
  max_count_team: number;
  @ApiProperty()
  max_member_in_team: number;
  @ApiProperty()
  name: string;
}
