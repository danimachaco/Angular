import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Alumno{

  nombre: string
  apellido: string
  email: string
  foto: string

}

export const listaAlumnos: Alumno[] =[
  { 
    nombre:"Daniel",
    apellido:"Machaco",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  },
  { 
    nombre:"Daniel",
    apellido:"Machaco",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  },{ 
    nombre:"Daniel",
    apellido:"Machaco",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  },{ 
    nombre:"Daniel",
    apellido:"Machaco",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  }

]

@Component({
  imports: [FormsModule],
  selector: 'app-ej02',
  styleUrl: './ej02.css',
  templateUrl: './ej02.html',
})
export class Ej02 {
  alumnos: Alumno[] = listaAlumnos
}
