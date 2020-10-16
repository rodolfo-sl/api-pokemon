import { ApiPokemonService } from './../../services/api-pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private pokemonId: string;
  public infoPokemon;

  constructor(private activatedRoute: ActivatedRoute,
    private service: ApiPokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id'];
      this.informationPokemonId();
    });
  }

  private informationPokemonId() {
    this.service.getCardsId(this.pokemonId)
      .subscribe((response: any) => {
        this.infoPokemon = response.card;
      }, error => {
      })
  }


}
