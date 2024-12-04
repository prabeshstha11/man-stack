import { Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', component: HomeComponent },
];
