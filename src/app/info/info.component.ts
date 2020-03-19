import { Component, OnInit } from '@angular/core';
import { GetBeerService } from '../get-beer.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  beers : Object;


  constructor(private GetBeer:GetBeerService) { }

  ngOnInit() {
    this.GetBeer.getBeer().subscribe(data => {
      this.beers = data
      console.log(this.beers)
    })

  }

}
