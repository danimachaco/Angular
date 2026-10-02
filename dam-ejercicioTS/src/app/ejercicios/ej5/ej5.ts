import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class CuentaBancaria{
  private saldo: number;
  
  constructor(public saldoInicialC:number) {
    this.saldo = saldoInicialC
  }

  // iniciarSaldo(a:number):number{
  //   a = this.saldo
  //   return this.saldo
  // }
  hacerIngreso(a:number):number{
    this.saldo+=a
    return this.saldo;

  }

  hacerRetiro(a:number):number{
    if(a<this.saldo){
      this.saldo-=a
    }
    return this.saldo;

  }

  mostrarSaldo():number{

    return this.saldo
  }
}
@Component({
  imports: [FormsModule],
  selector: 'app-ej5',
  styleUrl: './ej5.css',
  templateUrl: './ej5.html',
})
export class Ej5{
  @Output() respuesta5 = new EventEmitter<number>()
  
  saldoInicial: number = 0;
  ingreso: number = 0
  retiro: number = 0
  saldoCuenta: number = 0

  
  cuenta= new CuentaBancaria(this.saldoCuenta);

  enviarRespuesta5(){
    this.cuenta = new CuentaBancaria(this.saldoInicial)
    this.cuenta.hacerIngreso(this.ingreso)

    this.cuenta.hacerRetiro(this.retiro)

    this.respuesta5.emit(this.cuenta.mostrarSaldo())
  }

}


