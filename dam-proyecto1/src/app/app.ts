import { Component, signal } from '@angular/core';
import { Padre } from './padre/padre';

@Component({
  imports: [Padre],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
