import { Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';

export const routes: Routes = [
    { path: 'notas', component: NotasComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
