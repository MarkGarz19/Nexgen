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
  movies: any[] = []; //arreglo que se va a mostrar en el html

  constructor(private peliculasService: PeliculasService) { }

  searchMovies() { //esta funcion se encarga de buscar las peliculas
    this.peliculasService.searchMovies(this.searchInput).subscribe({ //se hace la peticion a la API
      next: (response: { results: any; }) => { // si la peticion es exitosa se muestra la respuesta
        this.movies = this.peliculasService.displayMovies(response.results);
      },
      error: () => { // si la peticion falla se muestra un error
        this.movies = [{ message: 'Error al cargar las películas' }];
      }
    });
  }
}