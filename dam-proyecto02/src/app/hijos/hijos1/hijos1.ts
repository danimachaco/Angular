import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijos1',
  styleUrl: './hijos1.css',
  templateUrl: './hijos1.html',
})
export class Hijos1 {
  @Input() nombreHijo: string = '';
}
