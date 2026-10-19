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

@Component({
  imports: [FormsModule],
  selector: 'app-control-flow',
  styleUrl: './control-flow.css',
  templateUrl: './control-flow.html',
})

export class ControlFlow {
  nombre: string = ""

  socio:string = ""

  carta: string = ""
  cartaLista: Carta[] = []
  mostrarMenu: boolean = false

  seleccion:string = ""

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
  public mostrarReserva(){
    this.mostrarMenu=true
  }
  public seleccionCarta(nombre:string){
    this.seleccion = nombre
  }
  
}
