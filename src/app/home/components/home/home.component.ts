import { Component, OnInit } from '@angular/core';

import { GifsService } from '../../../shared/services/gifs.service';

@Component({
  selector: 'autoaddress-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {
    this.getTrendingGifs();
  }

  getTrendingGifs() {
    this._gifsService.getTrendingGifs().subscribe((gifsData) => {
      console.log(gifsData);
    });
  }
}
