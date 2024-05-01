import {ApiProperty} from "@nestjs/swagger";
import {Command} from "../../../prisma/generated";

export class CreateCommandDto implements Command {
  @ApiProperty()
  theme_id: number;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
