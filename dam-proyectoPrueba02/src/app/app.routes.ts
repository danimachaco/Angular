import { Routes } from '@angular/router';
import { Pag1 } from './pages/pag1/pag1';
import { Pag2 } from './pages/pag2/pag2';

export const routes: Routes = [
    { path: '', redirectTo: 'pages/pag1', pathMatch: 'full' },
    { path: 'pages/pag1', component: Pag1 },
    { path: 'pages/pag2', component: Pag2 },
    { path: '**', redirectTo: 'pages/pag1' }
];
