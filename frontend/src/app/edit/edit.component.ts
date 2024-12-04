import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  title: string = '';
  description: string = '';
  tag: string = '';
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.fetchNoteData(noteId);
    }
  }

  fetchNoteData(id: string) {
    this.http.get<any>(`http://localhost:3000/note/${id}`).subscribe((data) => {
      this.title = data.title;
      this.description = data.description;
      this.tag = data.tag.join(', ');
    });
  }

  updateNote(): void {
    const updatedNote = {
      title: this.title,
      description: this.description,
      tag: this.tag.split(',').map((t) => t.trim()),
    };

    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.http
        .put(`http://localhost:3000/note/${noteId}`, updatedNote)
        .subscribe(() => {
          console.log('Note updated successfully');
          this.router.navigate(['/']);
        });
    }
  }
}
