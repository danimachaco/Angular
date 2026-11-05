import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  desplegadoCF:boolean = false
  desplegadoS:boolean = false
  desplegadoC:boolean = false
  desplegadoDir:boolean = false



  public desplegarCF(){
    this.desplegadoCF = !this.desplegadoCF
  }

  public desplegarS(){
    this.desplegadoS = !this.desplegadoS
  }

  public desplegarC(){
    this.desplegadoC = !this.desplegadoC
  }

  public desplegarDir(){
    this.desplegadoDir = !this.desplegadoDir
  }
}
