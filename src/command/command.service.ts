import {Injectable} from '@nestjs/common';
import {CreateCommandDto} from './dto/create-command.dto';
import {UpdateCommandDto} from './dto/update-command.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class CommandService {
  constructor(private readonly prismaService: PrismaService) {
  }

  create(createCommandDto: CreateCommandDto) {
    return this.prismaService.command.create({
      data: createCommandDto
    })
  }

  findAll() {
    return this.prismaService.command.findMany();
  }

  findByThemeId(themeId: string) {
    return this.prismaService.command.findMany({
      where: {
        theme_id: +themeId,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.command.findFirst({
      where: {
        id
      }
    });
  }

  update(id: number, updateCommandDto: UpdateCommandDto) {
    return this.prismaService.command.update({
      data: updateCommandDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prismaService.command.delete({
      where: {
        id
      }
    });
  }
}
