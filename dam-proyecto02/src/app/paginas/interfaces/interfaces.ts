import { Component } from '@angular/core';
import { Hijos1 } from '../../hijos/hijos1/hijos1';

@Component({
  imports: [Hijos1],
  selector: 'app-interfaces',
  styleUrl: './interfaces.css',
  templateUrl: './interfaces.html',
})
export class Interfaces {
  mensaje: string = 'arrastrita';
}
