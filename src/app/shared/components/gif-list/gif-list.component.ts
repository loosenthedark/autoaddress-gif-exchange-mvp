import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IGifData } from '../../types/gif-data.interface';
import { GifListItemComponent } from '../gif-list-item/gif-list-item.component';

@Component({
  selector: 'autoaddress-gif-list',
  standalone: true,
  imports: [CommonModule, GifListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  @Input() gifs: IGifData[] = [];
}
