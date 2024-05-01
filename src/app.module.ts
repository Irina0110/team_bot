import {Module} from '@nestjs/common';
import {ThemeModule} from './theme/theme.module';
import {PrismaService} from "./prisma.service";
import {UserModule} from './user/user.module';
import {CommandModule} from './command/command.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [ThemeModule, UserModule, CommandModule],
})
export class AppModule {
}
