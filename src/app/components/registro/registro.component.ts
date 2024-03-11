import { Component } from '@angular/core';
import { UsuarioService } from '../../services/registro.service';
import { FormsModule } from '@angular/forms';

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
  onSubmit(): void {
    this.usuarioService.registrarUsuario(this.nombre, this.correo, this.contrasena)
      .then((data) => {
        alert(data.mensaje);
      })
      .catch((error: any) => {
        console.error('Error:', error);
        alert("Error al registrar el usuario");
      });
  }
}