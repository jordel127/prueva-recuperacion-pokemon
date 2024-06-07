import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  //Array de jugadores i puntos
  Arrayjugadores: string[] = [];
  ArraypuntosJugadores: string[] = [];

  get score(): number {
    return this.playerService.score;
  }

  get highScore(): number {
    return this.playerService.highScore;
  }

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    // localStorage.getItem("nombre");
    // localStorage.getItem("puntos");
    //
    // sessionStorage.setItem("Arrayjugadores", JSON.stringify(this.Arrayjugadores));
    // sessionStorage.setItem("Arraypuntos", this.ArraypuntosJugadores);
    //
    // console.log(this.Arrayjugadores[0].nombre);
    // console.log(this.ArraypuntosJugadores[0].puntos);
  }

}
