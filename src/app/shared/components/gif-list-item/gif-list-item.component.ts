import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IGifData } from '../../types/gif-data.interface';

@Component({
  selector: 'autoaddress-gif-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gif-list-item.component.html',
  styleUrls: ['./gif-list-item.component.scss'],
})
export class GifListItemComponent {
  @Input() gif: IGifData | undefined;
}
