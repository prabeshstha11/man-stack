import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [DatabaseModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
