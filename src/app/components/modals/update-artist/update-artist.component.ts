import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistUpdateComponent } from '../../forms/update/update.component';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss']
})
export class UpdateArtistComponent {

  @Input() artist:IArtist = {
          artistID: '',
          name: '',
          country: '',
          enterprise: '',
          debutDate: new Date,
          type: ''
         };
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ArtistUpdateComponent, {
      data: {artist: this.artist},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }

}
