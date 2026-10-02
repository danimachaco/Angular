import { Component } from '@angular/core';
import { Ej1 } from '../ejercicios/ej1/ej1';
import { Ej2 } from '../ejercicios/ej2/ej2';
import { Ej3 } from '../ejercicios/ej3/ej3';
import { Ej4 } from '../ejercicios/ej4/ej4';
import { Ej5 } from '../ejercicios/ej5/ej5';

@Component({
  imports: [Ej1, Ej2, Ej3, Ej4, Ej5],
  selector: 'app-respuestas',
  styleUrl: './respuestas.css',
  templateUrl: './respuestas.html',
})

export class Respuestas {

  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string[] = [];
  respuesta4: any = ""
  respuesta5: number = 0;

  obtenerRespuesta1(resp: number) {
    this.respuesta1 = "Resultado: " + resp;
  }

  obtenerRespuesta2(resp: string){
    this.respuesta2 = resp;
  }

  obtenerRespuesta3(resp: string[]){
    this.respuesta3 = resp
  }

  obtenerRespuesta4(resp: any){

    this.respuesta4 = resp

  }
  obtenerRespuesta5(resp: number){
    this.respuesta5 = resp
  }
}



