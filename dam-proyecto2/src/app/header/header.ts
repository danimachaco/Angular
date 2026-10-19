import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  open: boolean = true
  isOpen(){
    this.open= !this.open
    return this.open
  }
}
