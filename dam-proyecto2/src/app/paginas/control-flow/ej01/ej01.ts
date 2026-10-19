import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Carta{
  nombre: string
  descripcion: string
  precio: number
}

export const cartaNormal: Carta[] =[

  {nombre: 'Normal1', descripcion:'Normal1',precio:10},
  {nombre: 'Normal2', descripcion:'Normal2',precio:20},
  {nombre: 'Normal3', descripcion:'Normal3',precio:30},

]

export const cartaVegetariana: Carta [] =[
  
  {nombre: 'Vegetariano1', descripcion:'Vegetariano1',precio:10},
  {nombre: 'Vegetariano2', descripcion:'Vegetariano2',precio:20},
  {nombre: 'Vegetariano3', descripcion:'Vegetariano3',precio:30},

]

export const cartaVegana: Carta [] =[
  
  {nombre: 'Vegano1', descripcion:'Vegano1',precio:10},
  {nombre: 'Vegano2', descripcion:'Vegano2',precio:20},
  {nombre: 'Vegano3', descripcion:'Vegano3',precio:30},

]

class Plato{
  public nombre: string
  public precio: number

  constructor(public nombreC: string, public precioC: number){
    this.nombre = nombreC
    this.precio = precioC
  }
}

class Reserva{
  public nombre:string
  public categoria:string
  public platos:Plato[]


  constructor(public nombreC: string, public categoriaC: string, public platosC:Plato[]){
   this.nombre = nombreC
   this.categoria = categoriaC
   this.platos = platosC
  }
}

@Component({
  imports: [FormsModule],
  selector: 'app-ej01',
  styleUrl: './ej01.css',
  templateUrl: './ej01.html',
})
export class Ej01 {

  nombre: string = ""
  
  socio:string = ""

  carta: string = ""
  cartaLista: Carta[] = []
  mostrarReserva: boolean = false

  seleccion:string = ""
  listaSeleccion:Plato[] = []

  reservas:Reserva[]=[]

  porcentaje: string = ""
  descuento:number = 0
  
  totalN:number=0

  public cambiarMenu(){
    

    switch(this.carta){

      case "normal":
        this.cartaLista = cartaNormal
        break
      
      case "vegana":
        this.cartaLista = cartaVegana
        break

      case "vegetariana":
        this.cartaLista = cartaVegetariana
        break
    }
  }
  public nuevaReserva(nombre: string, socio: string, listaPlatos: Plato[]){
    this.reservas.push(new Reserva(nombre,socio,listaPlatos)) 

    switch(socio){
      case "socio":
        this.descuento = 0.4
        this.porcentaje="40%"
        break
      case "no_socio":
        this.descuento = 0.2
        this.porcentaje="20%"
        break
      case "invitado":
        this.descuento = 0
        this.porcentaje="0%"
        break
    }
    
    
    this.mostrarReserva = ! this.mostrarReserva

  }
  public seleccionCarta(nombre:string, precio:number){
    this.seleccion = nombre
    this.listaSeleccion.push(new Plato(nombre,precio))
  }
  
  
    

}

