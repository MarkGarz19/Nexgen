import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<any> { // esta funcion permite obtener los datos de un pokemon especifico
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}