import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../../servicios/alumnos-service';
import { Resaltado } from '../../../directivas/resaltado';
import { Mayusculas } from '../../../directivas/mayusculas';

@Component({
  imports: [Resaltado, Mayusculas],
  selector: 'app-dir02',
  styleUrl: './dir02.css',
  templateUrl: './dir02.html',
})
export class Dir02 {
  objAService = inject(AlumnosService);
  alumnos = this.objAService.obtenerAlumnos();


}
