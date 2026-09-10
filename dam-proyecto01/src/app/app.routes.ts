import { Routes } from '@angular/router';
import {Pag1 } from './pages/pag1/pag1';
import { Pag2 } from './pages/pag2/pag2';
import { Pag3 } from './pages/pag3/pag3';


export const routes: Routes = [

    { path: '', redirectTo: 'paginas/pag1', pathMatch: 'full' },
    { path: 'paginas/pag1', component: Pag1 },
    { path: 'paginas/pag2', component: Pag2 },
    { path: 'paginas/pag3', component: Pag3 },
    { path: '**', redirectTo: 'paginas/pag1' }

];
