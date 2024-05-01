import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CommandService} from './command.service';
import {CreateCommandDto} from './dto/create-command.dto';
import {UpdateCommandDto} from './dto/update-command.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('command')
@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {
  }

  @Post()
  create(@Body() createCommandDto: CreateCommandDto) {
    return this.commandService.create(createCommandDto);
  }

  @Get()
  findAll() {
    return this.commandService.findAll();
  }

  @Get(':theme_id')
  findByThemeId(@Param('theme_id') themeId: string) {
    return this.commandService.findByThemeId(themeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandDto: UpdateCommandDto) {
    return this.commandService.update(+id, updateCommandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandService.remove(+id);
  }
}
