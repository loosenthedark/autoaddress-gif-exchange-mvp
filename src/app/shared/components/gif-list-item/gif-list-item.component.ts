import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';

import { IGifData } from '../../types/gif-data.interface';
import { GifDialogComponent } from '../gif-dialog/gif-dialog.component';

@Component({
  selector: 'autoaddress-gif-list-item',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './gif-list-item.component.html',
  styleUrls: ['./gif-list-item.component.scss'],
})
export class GifListItemComponent {
  @Input() gif: IGifData | undefined;

  constructor(private _dialog: MatDialog) {}

  openGifDialog(gif: IGifData) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = gif;
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = '560px';
    dialogConfig.position = {
      top: '50vh',
      left: '50vw',
    };
    dialogConfig.panelClass = 'dialog-centered';

    this._dialog.open(GifDialogComponent, dialogConfig);
  }
}
