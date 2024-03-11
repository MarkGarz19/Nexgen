import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/usuarios';  // Esta es la url del backend

  constructor(private http: HttpClient) { }

  registrarUsuario(nombre: string, correo: string, contrasena: string): Promise<any> {
    const body = { nombre, correo, contrasena };
    return this.http.post(this.apiUrl, body).toPromise();
  }
}