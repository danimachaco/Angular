import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Persona{
  nombre: string;
  edad: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-ej2',
  styleUrl: './ej2.css',
  templateUrl: './ej2.html',
})
export class Ej2 {
  @Output() respuesta2 = new EventEmitter<string>();

  nombre: string = ""
  edad: number = 0

  persona1: Persona = {

    nombre: '',

    edad: 0

  };

  enviarRespuesta2() {
    this.persona1.nombre = this.nombre
    this.persona1.edad = this.edad
    this.respuesta2.emit(JSON.stringify(this.persona1));
  }
  
}
