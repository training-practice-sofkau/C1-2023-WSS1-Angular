import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArtistFormComponent } from '../../forms/artist-form/artist-form.component';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.scss'],
})
export class NewArtistComponent {
  @Output() newArtist = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ArtistFormComponent, {
      data: {},
      height: '80%',
      minWidth: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) this.newArtist.emit(result);
    });
  }
}
