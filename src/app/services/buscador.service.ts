import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentSearchService {
  private nombreComponentes: string[] = [
    'home',
    'clima',
    'peliculas',
    'adivinanza',
    'pokemon',
    'calculadora',
    'listado-usuario',
    'registro',
  ]; //arreglo con los nombres de los componentes

  obtenerComponentesFiltrados(searchTerm: string): string[] { //esta función se encarga de filtrar los componentes que coincidan con el searchTerm ingresado
    return this.nombreComponentes.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}