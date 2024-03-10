import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonData: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemonData(); // Obtener datos de todos los Pokémon al inicializar el componente
  }

  getAllPokemonData(): void {
    const pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1); // Obtener datos de los primeros 151 Pokémon (puedes ajustar el número según tus necesidades)
    for (const id of pokemonIds) {
      this.pokemonService.getPokemon(id).subscribe(data => {
        this.pokemonData.push(data);
      });
    }
  }
}