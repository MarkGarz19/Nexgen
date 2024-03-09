import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'clima', component: ClimaComponent },
    { path: 'peliculas', component: PeliculasComponent },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
