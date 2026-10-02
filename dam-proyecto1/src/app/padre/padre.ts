import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Hijo, FormsModule],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {
  nombrePadre: string = ''
  esVisible: boolean = false

  alterarComponente() {
    this.esVisible = !this.esVisible
  }
}
