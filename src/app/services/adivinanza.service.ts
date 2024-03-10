import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdivinanzaService {
  numeroSecreto: number = 5;

  comprobarAdivinanza(numeroInput: number): string {
    if (numeroInput === this.numeroSecreto) {
      return '¡Felicidades! Adivinaste el número.';
    } else {
      return 'Intenta de nuevo.';
    }
  }
}