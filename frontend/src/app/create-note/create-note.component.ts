import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss',
})
export class CreateNoteComponent {
  title: string = '';
  description: string = '';
  tag: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  addNote() {
    const note = {
      title: this.title,
      description: this.description,
      tag: this.tag.split(',').map((t) => t.trim()),
    };

    this.http.post('http://localhost:3000/note', note).subscribe((response) => {
      console.log('Note added successfully: ', response);
    });

    this.router.navigate(['/']);
  }
}
