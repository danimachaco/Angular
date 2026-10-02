import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ej4',
  styleUrl: './ej4.css',
  templateUrl: './ej4.html',
})
export class Ej4 {
  @Output() respuesta4 = new EventEmitter<any>()

  algo: number = 0

  enviarRespuesta4(){
    this.respuesta4.emit(pasarGenerico(this.algo))
  }
  
}

function pasarGenerico<T>(valor:T):T{

  return valor;

}
