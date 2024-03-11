import { Component } from '@angular/core';
import { UsuarioService } from '../../services/registro.service';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para utilizar ngModel en el formulario
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private usuarioService: UsuarioService) { }
  onSubmit(): void { // Método para registrar un usuario
    this.usuarioService.registrarUsuario(this.nombre, this.correo, this.contrasena) // Llamamos al método registrarUsuario del servicio
      .then((data) => { // Si la promesa se resuelve correctamente imprimimos el mensaje de éxito
        alert(data.mensaje);
      })
      .catch((error: any) => { // Si la promesa falla imprimimos el error
        console.error('Error:', error);
        alert("Error al registrar el usuario");
      });
  }
}