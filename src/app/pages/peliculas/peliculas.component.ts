import { Component } from '@angular/core';
// Importamos el módulo inyectable de service.
import { PeliculasService } from '../../services/peliculas.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {
  searchInput: string = '';
  movies: any[] = [];

  constructor(private peliculasService: PeliculasService) { }

  searchMovies() {
    this.peliculasService.searchMovies(this.searchInput).subscribe({
      next: (response: { results: any; }) => {
        this.movies = this.peliculasService.displayMovies(response.results);
      },
      error: () => {
        this.movies = [{ message: 'Error al cargar las películas' }];
      }
    });
  }
}