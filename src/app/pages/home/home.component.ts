import { ApiPokemonService } from './../../services/api-pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public $cardsPokemon;

  constructor(private service: ApiPokemonService) { }

  ngOnInit(): void {
    this.callCards();
  }

  callCards() {
    this.service.getCards()
      .subscribe((response: any) => {
        this.$cardsPokemon = response.cards
          .sort((a, b) => a.name.localeCompare(b.name));
      }, error => {
      })
  }

}
