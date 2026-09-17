import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijos2',
  styleUrl: './hijos2.css',
  templateUrl: './hijos2.html',
})
export class Hijos2 {
  @Output() mensaje = new EventEmitter<string>();
  
  guardarUsuario() {
    this.mensaje.emit('soy mu macho');
  }
}
