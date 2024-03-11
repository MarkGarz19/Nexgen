import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private api_key = 'acf5472e45e436d5026bfd4c5e792981';
  private urlBase = 'https://api.themoviedb.org/3/search/movie';
  private urlImg = 'https://image.tmdb.org/t/p/w200';

  constructor(private http: HttpClient) { }

  searchMovies(searchInput: string): Observable<any> { // esta funcion permite buscar peliculas utilizando el termino de busqueda especificado por el usuario y devuelve un observable
    return this.http.get(`${this.urlBase}?api_key=${this.api_key}&query=${searchInput}`);
  }

  displayMovies(movies: any[]): any[] { // esta funcion indica que si no se encontraron resultados para la busqueda, se devolvera un objeto con el mensaje correspondiente
    if (movies.length === 0) {
      return [{ message: 'No se encontraron resultados para tu búsqueda' }];
    }

    return movies.map(movie => ({ // esta funcion permite retornar un objeto con los datos que queremos mostrar
      title: movie.title,
      releaseDate: 'La fecha de lanzamiento fue: ' + movie.release_date,
      overview: movie.overview,
      posterPath: this.urlImg + movie.poster_path
    }));
  }
}