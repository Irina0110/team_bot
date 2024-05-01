import {Module} from '@nestjs/common';
import {CommandService} from './command.service';
import {CommandController} from './command.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [CommandController],
  providers: [CommandService, PrismaService]
})
export class CommandModule {
}
