import { Component } from '@angular/core';
import { AdivinanzaService } from '../../services/adivinanza.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css'
})
export class AdivinanzaComponent {
  numeroInput: number = 0;
  resultado: string = '';

  constructor(private adivinanzaService: AdivinanzaService) { }

  adivinarNumero() {
    this.resultado = this.adivinanzaService.comprobarAdivinanza(this.numeroInput);
  }
}
