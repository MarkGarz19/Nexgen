import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { OnInit } from '@angular/core'; // importamos la librería OnInit que permite inicializar el componente al cargar la página

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonData: any[] = []; // Array para almacenar los datos de los primeros 151 pokemónes

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemonData(); // Obtener datos de todos los Pokémon al inicializar el componente
  }

  getAllPokemonData(): void {
    const pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1); // Obtener datos de los primeros 151 Pokémon (puedes ajustar el número según tus necesidades)
    for (const id of pokemonIds) { // Iterar sobre los IDs de los primeros 151 Pokémon
      this.pokemonService.getPokemon(id).subscribe(data => { // Obtener datos de cada uno de los primeros 151 Pokémon
        this.pokemonData.push(data);
      });
    }
  }
}