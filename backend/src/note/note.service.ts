import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './entity/note.entity';
import { Model } from 'mongoose';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  // Adding a note
  async create(note: Partial<Note>): Promise<Note> {
    const newItem = new this.noteModel(note);
    return newItem.save();
  }

  // Getting all notes
  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  // Getting one note
  async findOne(id: string): Promise<Note> {
    return this.noteModel.findById(id).exec();
  }

  // Updating a note
  async update(id: string, note: Partial<Note>): Promise<Note> {
    return this.noteModel
      .findByIdAndUpdate(id, note, {
        new: true,
      })
      .exec();
  }

  // Deleting a note
  async delete(id: string): Promise<Note> {
    return this.noteModel.findByIdAndDelete(id).exec();
  }
}
