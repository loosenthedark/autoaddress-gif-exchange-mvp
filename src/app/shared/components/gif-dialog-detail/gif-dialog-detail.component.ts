import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IGifData } from '../../types/gif-data.interface';
import { FormatTitlePipe } from '../../pipes/format-title.pipe';

@Component({
  selector: 'autoaddress-gif-dialog-detail',
  standalone: true,
  imports: [CommonModule, FormatTitlePipe],
  templateUrl: './gif-dialog-detail.component.html',
  styleUrls: ['./gif-dialog-detail.component.scss'],
})
export class GifDialogDetailComponent {
  @Input() gif: IGifData | undefined;
}
