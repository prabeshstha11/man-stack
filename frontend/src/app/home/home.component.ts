import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  notes: any[] = [];

  constructor(private http: HttpClient) {}

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
}
