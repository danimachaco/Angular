import { Component, signal } from '@angular/core';

interface Alumno{
  email: string
  nombre: string
  apellidos: string
  imagen: string
  img: string
}

export const alumnos = [
  {
    email: "aitor.garcia.perez@colegiolitterator.com",
    nombre: "Aitor",
    apellidos: "García Pérez",
    imagen: "https://drive.google.com/open?id=1pke981pBNhzruhPi61fVsfPur71f8aQN",
    img: "https://lh3.googleusercontent.com/d/1pke981pBNhzruhPi61fVsfPur71f8aQN",
  },
  {
    email: "daniel.rodriguez.agudo@colegiolitterator.com",
    nombre: "Daniel",
    apellidos: "Rodriguez Agudo",
    imagen: "https://drive.google.com/open?id=1g_zFmzng_zYlZirUK-qYeMj124Bck9Y_",
    img: "https://lh3.googleusercontent.com/d/1g_zFmzng_zYlZirUK-qYeMj124Bck9Y_",
  },
  {
    email: "asier.garcia.catalan@colegiolitterator.com",
    nombre: "Asier",
    apellidos: "Garcia Catalan",
    imagen: "https://drive.google.com/open?id=1WrlQ_1aJRj3L7HsbeVHtO-H5l8WeUe11",
    img: "https://lh3.googleusercontent.com/d/1WrlQ_1aJRj3L7HsbeVHtO-H5l8WeUe11",
  },
  {
    email: "aitor.fernandezmarcos.salto@colegiolitterator.com",
    nombre: "Aitor",
    apellidos: "Fernandez de marcos",
    imagen: "https://drive.google.com/open?id=1asm3kYY4Wu3K7o-Fch8tzNo8SQbtg046",
    img: "https://lh3.googleusercontent.com/d/1asm3kYY4Wu3K7o-Fch8tzNo8SQbtg046",
  },
  {
    email: "pablopinazo656@gmail.com",
    nombre: "Pablo",
    apellidos: "Fernández Pinazo",
    imagen: "https://drive.google.com/open?id=1AzxBEWocn9ZShJLYAHvChI0m8OpQxEa-",
    img: "https://lh3.googleusercontent.com/d/1AzxBEWocn9ZShJLYAHvChI0m8OpQxEa-",
  },
  {
    email: "davidtole62@gmail.com",
    nombre: "David",
    apellidos: "Tole",
    imagen: "https://drive.google.com/open?id=1fyXQRUcIl-clk7olrZD554w6vE55jP_T",
    img: "https://lh3.googleusercontent.com/d/1fyXQRUcIl-clk7olrZD554w6vE55jP_T",
  },
  {
    email: "daniel.martinbuitrago@colegiolitterator.com",
    nombre: "Daniel",
    apellidos: "Martin-Buitrago Del Cerro",
    imagen: "https://drive.google.com/open?id=1QIbvVnRrfQeicn0Z0zy7xA3fn6obl_76",
    img: "https://lh3.googleusercontent.com/d/1QIbvVnRrfQeicn0Z0zy7xA3fn6obl_76",
  },
  {
    email: "angel.estebanez@colegiolitterator.com",
    nombre: "Ángel",
    apellidos: "Estébanez Gómez",
    imagen: "https://drive.google.com/open?id=1cIRcoZ9I_14Anmpp1-ID-5i3NJTnOH9k",
    img: "https://lh3.googleusercontent.com/d/1cIRcoZ9I_14Anmpp1-ID-5i3NJTnOH9k",
  }
];


@Component({
  imports: [],
  selector: 'app-s01',
  styleUrl: './s01.css',
  templateUrl: './s01.html',
})
export class S01 {
  listaAlumnos: Alumno[] = alumnos
}
