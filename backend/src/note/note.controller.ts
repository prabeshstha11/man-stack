import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './entity/note.entity';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() note: Note): Promise<Note> {
    return this.noteService.create(note);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Note> {
    return this.noteService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() note: Note): Promise<Note> {
    return this.noteService.update(id, note);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Note> {
    return this.noteService.delete(id);
  }
}
