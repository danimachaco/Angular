import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Interfaces } from './paginas/interfaces/interfaces';
import { Funiones } from './paginas/funiones/funiones';
import { Clases } from './paginas/clases/clases';
import { Operadores } from './paginas/operadores/operadores';
import { Variables } from './paginas/variables/variables';

export const routes: Routes = [
  { path: 'inicio', component: Inicio },
  { path: 'interfaces', component: Interfaces },
  { path: 'funiones', component: Funiones },
  { path: 'clases', component: Clases },
  { path: 'operadores', component: Operadores },
  { path: 'variables', component: Variables },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];
