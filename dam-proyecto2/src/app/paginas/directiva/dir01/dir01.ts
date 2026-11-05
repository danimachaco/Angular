import { Component, inject} from '@angular/core';
import { AlumnosService } from '../../../servicios/alumnos-service';
import { Alumno } from '../../../model/alumno';
import { Resaltado } from '../../../directivas/resaltado';


@Component({
  imports: [Resaltado],
  selector: 'app-dir01',
  styleUrl: './dir01.css',
  templateUrl: './dir01.html',
})
export class Dir01 {
  objAService = inject(AlumnosService);

  alumnos = this.objAService.obtenerAlumnos();

}
