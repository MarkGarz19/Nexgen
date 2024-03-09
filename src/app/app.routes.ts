import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, title: 'Inicio' },
    { path: 'clima', component: ClimaComponent, title: 'Clima' },
    { path: 'peliculas', component: PeliculasComponent, title: 'Peliculas' },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
