import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Ej01 } from './paginas/control-flow/ej01/ej01';
import { Ej02 } from './paginas/control-flow/ej02/ej02';
import { Ej03 } from './paginas/control-flow/ej03/ej03';
import { S01 } from './paginas/signal/s01/s01';
import { C1ev1 } from './paginas/controles/c1ev1/c1ev1';
import { Dir01 } from './paginas/directiva/dir01/dir01';
import { Dir02 } from './paginas/directiva/dir02/dir02';

export const routes: Routes = [

  { path: '', redirectTo: 'paginas/inicio', pathMatch: 'full' },
  { path: "paginas/inicio", component: Inicio},
  { path: "paginas/control-flow/ej01", component: Ej01},
  { path: "paginas/control-flow/ej02", component: Ej02},
  { path: "paginas/control-flow/ej03", component: Ej03},
  { path: "paginas/signal/S01", component: S01},
  { path: "paginas/controles/c1ev1", component: C1ev1},
  { path: "paginas/directivas/dir01", component: Dir01},
  { path: "paginas/directivas/dir02", component: Dir02},
  { path: '**', redirectTo: 'paginas/inicio' }
  
];
