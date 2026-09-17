import { Component } from '@angular/core';
import { Hijos2 } from '../../hijos/hijos2/hijos2';


@Component({
  imports: [Hijos2],
  selector: 'app-funiones',
  styleUrl: './funiones.css',
  templateUrl: './funiones.html',
})
export class Funiones {
  llegada: string = '';
  mensaje(s: any) {
    console.log(s);

    this.llegada = s;
  }
}
