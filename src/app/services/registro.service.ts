import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private BaseUrl = 'http://localhost:3000/usuarios';  // Esta es la url del backend 
  /*  private BaseUrl = 'https://nexgen-app.onrender.com/usuarios'; */

  constructor(private http: HttpClient) { }

  registrarUsuario(nombre: string, correo: string, contrasena: string): Promise<any> { // Esta es la función para registrar un usuario para el backend
    const body = { nombre, correo, contrasena }; // Definimos el body de la petición
    return this.http.post(this.BaseUrl, body).toPromise(); // Enviamos la petición al backend
  }
}