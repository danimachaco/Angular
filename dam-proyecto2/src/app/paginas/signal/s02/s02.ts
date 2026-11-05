import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../../servicios/alumnos-service';

@Component({
  imports: [],
  selector: 'app-s02',
  styleUrl: './s02.css',
  templateUrl: './s02.html',
})
export class S02 {
  alumnosService = inject(AlumnosService);

  alumnos = this.alumnosService.obtenerAlumnos()

  constructor(){
    console.log(this.alumnos)
  }
}
