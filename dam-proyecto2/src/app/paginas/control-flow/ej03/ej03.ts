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
    nombre:"Aitor",
    apellido:"Pirry",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  },{ 
    nombre:"Asir",
    apellido:"Machote",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  },{ 
    nombre:"Pablo",
    apellido:"Noblejas",
    email:"ns@email.com",
    foto:"https://picsum.photos/400/300"
  }

]
@Component({
  imports: [FormsModule],
  selector: 'app-ej03',
  styleUrl: './ej03.css',
  templateUrl: './ej03.html',
})
export class Ej03 {
  alumnos: Alumno[] = listaAlumnos
  
  mostrarModal: boolean = false

  nombreA: string = ""
  apellidoA: string = ""
  emailA: string = ""

  aniadido: boolean=false
  verCesta : boolean = false
  listaCesta:Alumno[]=[]

  posicion : number= 0
  a:Alumno={nombre:"",apellido:"",email:"",foto:""}

  aniadirCarrito(alumno: Alumno){
    this.mostrarModal = !this.mostrarModal
    this.nombreA = alumno.nombre
    this.apellidoA = alumno.apellido
    this.emailA = alumno.email

  }

  closeModal(){
    this.mostrarModal = !this.mostrarModal
  }

  mostrarCesta(){
    
    this.verCesta = !this.verCesta
    
  }
  
  alumnoAniadido(){
    this.a={nombre:this.nombreA,apellido:this.apellidoA,email:this.emailA,foto:""}
    this.listaCesta.push(this.a)
    this.aniadido = !this.aniadido
  }

  cerrarVentana(){
    this.aniadido = false
    this.mostrarModal = false
    this.verCesta = false
  }

  eliminarElemento(alumno: Alumno){
    this.posicion = this.listaCesta.indexOf(alumno)
    this.listaCesta.splice(this.posicion)
  }
}
