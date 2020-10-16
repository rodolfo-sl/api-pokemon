import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://api.pokemontcg.io/v1'

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  constructor( private http: HttpClient) { }

  public getCards() {
    return this.http.get(`${URL}/cards`);
  }

  public getCardsId(id: string) {
    return this.http.get(`${URL}/cards/${id}`);
  }
}
