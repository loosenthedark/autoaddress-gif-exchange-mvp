import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IGifData } from '../../types/gif-data.interface';
import { FormatTitlePipe } from '../../pipes/format-title.pipe';
import { GetTagsFromSlugPipe } from '../../pipes/get-tags-from-slug.pipe';

@Component({
  selector: 'autoaddress-gif-dialog-detail',
  standalone: true,
  imports: [CommonModule, FormatTitlePipe, GetTagsFromSlugPipe],
  templateUrl: './gif-dialog-detail.component.html',
  styleUrls: ['./gif-dialog-detail.component.scss'],
})
export class GifDialogDetailComponent {
  @Input() gif: IGifData | undefined;
}
