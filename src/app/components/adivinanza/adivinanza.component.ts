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

  adivinarNumero() { //método para llamar al método de la clase AdivinanzaService
    this.resultado = this.adivinanzaService.comprobarAdivinanza(this.numeroInput); //llamamos al método de la clase AdivinanzaService para comprobar el número
  }
}
