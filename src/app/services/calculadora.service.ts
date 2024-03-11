import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  constructor() { }

  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  restar(num1: number, num2: number): number {
    return num1 - num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  dividir(num1: number, num2: number): number {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return 0; // Manejo de división por cero
    }
  }
}