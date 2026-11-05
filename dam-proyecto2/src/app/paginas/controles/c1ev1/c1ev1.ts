import { Component, inject } from '@angular/core';
import { C1ev1Service } from '../../../servicios/c1ev1-service';


@Component({
  imports: [],
  selector: 'app-c1ev1',
  styleUrl: './c1ev1.css',
  templateUrl: './c1ev1.html',
})
export class C1ev1 {
  c1ev1Service = inject(C1ev1Service);

  objetos = this.c1ev1Service.obtenerAlumnos()

  sumar(indice: number){
    this.c1ev1Service.sumar(indice)
  }
  restar(indice: number){
    this.c1ev1Service.restar(indice)
  }
}
