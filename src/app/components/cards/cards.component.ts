import { ApiPokemonService } from './../../services/api-pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cardsPokemon;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public navigateToDetails(id) {
    this.router.navigateByUrl(`/details/${id}`, {state:{pokemonId: id}})
  }



}
