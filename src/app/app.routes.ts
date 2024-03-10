import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { AdivinanzaComponent } from './components/adivinanza/adivinanza.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, title: 'Inicio' },
    { path: 'clima', component: ClimaComponent, title: 'Clima' },
    { path: 'peliculas', component: PeliculasComponent, title: 'Peliculas' },
    { path: 'adivinanza', component: AdivinanzaComponent, title: 'Adivinanzas' },
    { path: 'pokemon', component: PokemonComponent, title: 'Pokemon' },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
