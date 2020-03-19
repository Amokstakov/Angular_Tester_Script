import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GetBeerService {

  constructor(private getBeerState: HttpClient) { }

  getBeer() {
    return this.getBeerState.get('https://api.openbrewerydb.org/breweries')
  }

  getSpecificBeer(x) {
    return this.getBeerState.get(`https://api.openbrewerydb.org/breweries/search?query=${x}`)
  }
}
