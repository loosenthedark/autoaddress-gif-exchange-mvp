import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { GifsService } from '../../../shared/services/gifs.service';
import { IGifData } from '../../../shared/types/gif-data.interface';
import { GifListComponent } from '../../../shared/components/gif-list/gif-list.component';
import { GifSearchComponent } from '../../../shared/components/gif-search/gif-search.component';

@Component({
  selector: 'autoaddress-home',
  standalone: true,
  imports: [GifListComponent, CommonModule, GifSearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gifs$: Observable<IGifData[]> | undefined;

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {
    this.getTrendingGifs();
  }

  getTrendingGifs() {
    this.gifs$ = this._gifsService.getTrendingGifs();
  }
}
