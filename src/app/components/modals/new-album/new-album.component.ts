import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlbumFormComponent } from '../../forms/Album/album-form/album-form.component';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss']
})
export class NewAlbumComponent {

  @Output() newAlbum = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AlbumFormComponent, {
      data: {},
      height: '80%',
      minWidth: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.newAlbum.emit(result);
    });
  }

}
