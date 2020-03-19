import { Component, OnInit } from '@angular/core';

//import the service component from the file location
import { GetBeerService } from '../get-beer.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  beers: Object;
  beer: Object;

  constructor(private getBeer: GetBeerService) { }

  ngOnInit() {
    this.getBeer.getBeer().subscribe(data => {
      this.beers = data
    })

  }

  onChange(x){
    this.getBeer.getSpecificBeer(x.value).subscribe(data => {
      this.beer = data
      console.log(this.beer)
    })
  }

}
