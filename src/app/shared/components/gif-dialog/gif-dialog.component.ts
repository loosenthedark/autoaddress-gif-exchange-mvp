import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { IGifData } from '../../types/gif-data.interface';
import { GifDialogDetailComponent } from '../gif-dialog-detail/gif-dialog-detail.component';

@Component({
  selector: 'autoaddress-gif-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, GifDialogDetailComponent],
  templateUrl: './gif-dialog.component.html',
  styleUrls: ['./gif-dialog.component.scss'],
})
export class GifDialogComponent {
  gif: IGifData;

  constructor(
    public dialogRef: MatDialogRef<GifDialogComponent>,
    @Inject(MAT_DIALOG_DATA) gif: IGifData
  ) {
    this.gif = gif;
  }
}
