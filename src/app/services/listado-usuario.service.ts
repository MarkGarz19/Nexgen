import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoUsuarioService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() { // esta función es para obtener los usuarios de la base de datos local
    return this.http.get('http://localhost:3000/listar-usuarios'); // URL de la base de datos
  }
}
