import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sessio-perez',
  templateUrl: './iniciar-sessio-perez.component.html',
  styleUrls: ['./iniciar-sessio-perez.component.css']
})
export class IniciarSessioPerezComponent implements OnInit {
  nombre: string = "";
  puntos: number | null = null;


  constructor() { }

  ngOnInit(): void {
  }
  formularioNombre() {
    if (this.nombre === "" || this.puntos === null) {
      alert("El nombre no puede estar vacio");
      //Si puntos es negaativo dor aleta
    }else if (this.puntos < 0) {
      alert("El puntos no puede ser negativo");
    }else {
      //usar localStorage para guardar el nombre del jugador i los puntos
      localStorage.setItem("nombre", this.nombre);
      localStorage.setItem("puntos", this.puntos.toString());
      window.location.href = "/game";
    }
  }
}
