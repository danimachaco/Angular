import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class C1ev1Service {
    objetos = [
            {
                nombre: "Panel de administración",
                descripcion: "Desarrollo del dashboard para gestionar usuarios y permisos",
                estado: "In Progress",
                cumplido: 45,
                img: "img/panel-admin.png"
            },
            {
                nombre: "App de recetas",
                descripcion: "Aplicación móvil para guardar y compartir recetas de cocina",
                estado: "Under Review",
                cumplido: 90,
                img: "img/app-recetas.png"
            },
            {
                nombre: "Tienda online",
                descripcion: "Catálogo de productos, carrito de compra y pasarela de pago",
                estado: "Done",
                cumplido: 100,
                img: "img/tienda-online.png"
            },
            {
                nombre: "Chat en tiempo real",
                descripcion: "Mensajería instantánea con WebSockets y notificaciones",
                estado: "Postponed",
                cumplido: 12,
                img: "img/chat-tiempo-real.png"
            },
            {
                nombre: "Blog personal",
                descripcion: "Sitio con artículos, categorías y sistema de comentarios",
                estado: "In Progress",
                cumplido: 70,
                img: "img/blog-personal.png"
            }
        ];
    obtenerAlumnos(){
        return this.objetos
    }

    sumar(indice:number){
        this.objetos[indice].cumplido += 10
        return this.objetos
    }

    restar(indice:number){
        this.objetos[indice].cumplido -= 10
        return this.objetos
    }
}
