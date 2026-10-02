import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-ej3',
  styleUrl: './ej3.css',
  templateUrl: './ej3.html',
})
export class Ej3 {
  @Output() respuesta3 = new EventEmitter<Array<string>>();

  array: string []= []
  palabra: string = ""

  enviarRespuesta3() {
    this.array = this.palabra.split(",")
    this.respuesta3.emit(this.array)
  }
}
