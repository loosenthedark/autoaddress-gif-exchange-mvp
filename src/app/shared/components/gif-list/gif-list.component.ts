import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IGifData } from '../../types/gif-data.interface';

@Component({
  selector: 'autoaddress-gif-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent {
  @Input() gifs: IGifData[] = [];
}
