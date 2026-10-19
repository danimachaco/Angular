import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './aside/aside';
import { Header } from './header/header';
// import { HeaderMovile } from './header-movile/header-movile';
import { Footer } from './footer/footer';


@Component({
  imports: [RouterOutlet, Aside, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
