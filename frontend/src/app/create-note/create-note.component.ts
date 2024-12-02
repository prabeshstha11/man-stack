import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss',
})
export class CreateNoteComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    // get the title, description, tags and add to the database

    // call localhost:3000/note and then perform a post request

    this.router.navigate(['/']);
  }
}
