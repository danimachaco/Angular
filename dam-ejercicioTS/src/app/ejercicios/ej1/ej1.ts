import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ej1',
  styleUrl: './ej1.css',
  templateUrl: './ej1.html',
})

export class Ej1 {
  @Output() respuesta1 = new EventEmitter<number>();

  num1: number = 0;
  num2: number = 0

  enviarRespuesta1() {
    this.respuesta1.emit(this.num1 + this.num2);
  }
}
