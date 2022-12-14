import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(new ValidationPipe()) data: UserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(Number(id));
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: UserDTO) {
    return this.userService.update(Number(id), data);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(Number(id));
  }
}
