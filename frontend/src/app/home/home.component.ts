import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  notes: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  async fetchNotes() {
    const apiUrl = 'http://localhost:3000/note';

    try {
      this.notes = await firstValueFrom(this.http.get<any[]>(apiUrl));
    } catch (error) {
      console.error('Error fetching notes: ' + error);
    }
  }

  ngOnInit(): void {
    this.fetchNotes();
  }

  deleteNote(id: string): void {
    const url = `http://localhost:3000/note/${id}`;
    console.log(url);

    this.http.delete(url).subscribe({
      next: (response) => {
        console.log('Note deleted successfully: ', response);

        this.notes = this.notes.filter((note) => note._id !== id);
      },
    });
  }

  editNote(id: string) {
    const url = `/edit/${id}`;
    this.router.navigate([url]);
    // console.log(url);
  }
}
