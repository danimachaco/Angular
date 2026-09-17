import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-operadores',
  styleUrl: './operadores.css',
  templateUrl: './operadores.html',
})
export class Operadores {
  mensaje: string = 'Esto es del typescript machote';
  usuario: string = '';
}
