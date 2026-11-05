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

  mostrarModal: boolean = false

  nombreA: string = ""
  apellidoA: string = ""
  emailA: string = ""


  aniadirCarrito(alumno: Alumno){
    this.mostrarModal = !this.mostrarModal
    this.nombreA = alumno.nombre
    this.apellidoA = alumno.apellido
    this.emailA = alumno.email

  }

  closeModal(){
    this.mostrarModal = !this.mostrarModal
  }
}
