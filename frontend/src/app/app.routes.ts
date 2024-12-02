import { Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'create', component: CreateNoteComponent },
  { path: '', component: HomeComponent },
];
