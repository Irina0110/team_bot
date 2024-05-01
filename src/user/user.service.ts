import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) {
  }

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id
      }
    });
  }

  findTelegramUser(telegram_chat_id: string) {
    return this.prismaService.user.findFirst({
      where: {
        telegram_chat_id
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      data: updateUserDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        id
      }
    });
  }
}
