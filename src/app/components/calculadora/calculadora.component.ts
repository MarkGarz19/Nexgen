import { Component } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;

  constructor(private calculadoraService: CalculadoraService) { }

  sumar(): void { // la funcion suma devolvera un resultado por la suma de dos valores
    this.resultado = this.calculadoraService.sumar(this.num1, this.num2);
  }

  restar(): void { // la funcion resta devolvera un resultado por la resta de dos valores
    this.resultado = this.calculadoraService.restar(this.num1, this.num2);
  }

  multiplicar(): void {
    this.resultado = this.calculadoraService.multiplicar(this.num1, this.num2);
  }

  dividir(): void {
    this.resultado = this.calculadoraService.dividir(this.num1, this.num2);
  }
}