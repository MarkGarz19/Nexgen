import { Component, OnInit } from '@angular/core';
import { ListadoUsuarioService } from '../../services/listado-usuario.service';

@Component({
  selector: 'app-listado-usuario',
  standalone: true,
  imports: [],
  templateUrl: './listado-usuario.component.html',
  styleUrl: './listado-usuario.component.css'
})

export class ListadoUsuarioComponent implements OnInit {
  usuarios: any[] = []; 

  constructor(private ListadoUsuarioService: ListadoUsuarioService) { }

  ngOnInit() { // Llamar la funcion para obtener los usuarios
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.ListadoUsuarioService.obtenerUsuarios()
      .subscribe((response) => {// Verificar el tipo de datos devuelto
        console.log(typeof response); // Verificar el tipo de datos devuelto
        console.log(response); // Imprimir los datos devueltos para inspeccionar su estructura
        this.usuarios = response as any[]; // Convertir la respuesta en un arreglo de objetos
        console.log('Usuarios obtenidos del backend:', this.usuarios);
      }, error => {
        console.error('Error al obtener usuarios:', error);
      });
  }
}