import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Ej01 } from './paginas/control-flow/ej01/ej01';
import { Ej02 } from './paginas/control-flow/ej02/ej02';

export const routes: Routes = [

  { path: '', redirectTo: 'paginas/inicio', pathMatch: 'full' },
  { path: "paginas/inicio", component: Inicio},
  { path: "paginas/control-flow/ej01", component: Ej01},
  { path: "paginas/control-flow/ej02", component: Ej02},
  { path: '**', redirectTo: 'paginas/inicio' }
  
];
