import {Injectable} from '@nestjs/common';
import {CreateThemeDto} from './dto/create-theme.dto';
import {UpdateThemeDto} from './dto/update-theme.dto';
import {PrismaService} from "../prisma.service";

@Injectable()
export class ThemeService {

  constructor(private readonly prismaService: PrismaService) {
  }


  async create(createThemeDto: CreateThemeDto) {
    return this.prismaService.theme.create({
      data: createThemeDto,
    });
  }

  findAll() {
    return this.prismaService.theme.findMany();
  }

  async avalible() {
    const themes = await this.prismaService.theme.findMany({
      include: {
        comand: true
      }
    })

    return themes.filter(th => {

      if (th.comand.length === 0) return true

      return th.comand.some(async c => {
        const teams = await this.prismaService.command.findMany({
          where: {
            id: c.id
          },
          include: {
            User: true
          }
        })

        return teams.length < th.max_count_team
      })
    })
  }

  findOne(id: number) {
    return this.prismaService.theme.findFirst({
      where: {
        id
      }
    });
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return this.prismaService.theme.update({
      data: updateThemeDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prismaService.theme.delete({
      where: {
        id
      }
    });
  }
}