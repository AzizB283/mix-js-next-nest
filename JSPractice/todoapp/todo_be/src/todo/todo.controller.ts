import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('todo')
@ApiTags('Todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post(':userId')
  create(
    @Body(ValidationPipe) createTodoDto: CreateTodoDto,
    @Param('userId') userId: number,
  ) {
    return this.todoService.create(createTodoDto, userId);
  }

  @Get('/findallnotcompleted/:userId')
  findAllTodosByUserNotCompleted(@Param('userId') userId: number) {
    return this.todoService.findAllTodosByUserNotCompleted(userId);
  }

  @Get('/findallcompleted/:userId')
  findAllTodosByUserCompleted(@Param('userId') userId: number) {
    return this.todoService.findAllTodosByUserCompleted(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.todoService.update(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(Number(id));
  }
}
