import { Component, OnInit } from '@angular/core';
import { getRandomItem } from 'src/app/helpers/random.helper';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PlayerService } from '../../services/player.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  loaded: boolean = false;
  private _selected: boolean = false;
  private _pokemonSelected: string = '';
  private _pokemons: Pokemon[] = [];
  private _pokemon!: Pokemon;

  nombreJugador: string | null = null;
  puntos: string | null = null;

  get score(): number {
    return this.playerService.score;
  }

  get hearts(): Array<any> {
    return Array(this.playerService.lifes);
  }

  get selected(): boolean {
    return this._selected;
  }

  get pokemonSelected(): string {
    if (!this.selected) return '';
    return this._pokemonSelected;
  }

  get pokemonList(): Pokemon[] {
    return [...this._pokemons];
  }

  get urlImage(): string {
    return this._pokemon.sprites.other?.dream_world.front_default || '';
  }

  get pokemonName(): string {
    return this._selected? this._pokemon.name : 'undefined';
  }

  constructor(
    private playerService: PlayerService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.playerService.resetGame();
    this.newGame();

    this.nombreJugador = localStorage.getItem("nombre");
    this.puntos = localStorage.getItem("puntos");
  }

  disminuirTamanyo() {
    const image = document.querySelector('#ImagenPokemon app-pokemon-view img') as HTMLImageElement;
    if (image) {
      image.style.width = '100px';
      image.style.height = '100px';
      //image.style.transform = 'rotate(90deg)'; // Rota la imagen 90 grados
    }
  }

  onSelect(pokemonName: string) {
    this._pokemonSelected = pokemonName;
    this._selected = true;

    if (pokemonName === this._pokemon.name) {
      this.playerService.increasePoints();
      this.puntos = localStorage.getItem("puntos");
      console.log(this.puntos);
    }

    if (pokemonName !== this._pokemon.name) {
      this.playerService.decreaseLifes();
      console.log('incorrect');
    }

  }

  // this function es execute every time that user click in next game
  async newGame() {

    this.loaded = false;
    this._selected = false;
    this._pokemons = await this.pokemonService.getRandomPokemons(4).catch(error => {
      console.log('Error: ', error);
      return [];
    });
    if (this._pokemons.length == 0) {
      this.newGame();
    } else {
      this._pokemon = getRandomItem(this._pokemons) || this._pokemons[0];
      console.log(this._pokemons, this._pokemon);
      this.loaded = true;
    }
  }

}
