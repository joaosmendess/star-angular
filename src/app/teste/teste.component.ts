import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { FilmInterface } from '../interfaces/films.interface';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
})
export class TesteComponent implements OnInit {
  filmList: FilmInterface[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTeste();
  }
  getTeste() {
    this.apiService.getApi().subscribe({
      next: (result) => {
        this.filmList = result.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
