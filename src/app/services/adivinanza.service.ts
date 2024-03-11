import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdivinanzaService {
  numeroSecreto: number = 5;

  comprobarAdivinanza(numeroInput: number): string { //método para comprobar el número
    if (numeroInput === this.numeroSecreto) { //comprobamos el número con el número secreto y devolvemos un string si el resultado es correcto o en caso contrario incorrecto
      return '¡Felicidades! Adivinaste el número.';
    } else {
      return 'Intenta de nuevo.';
    }
  }
}