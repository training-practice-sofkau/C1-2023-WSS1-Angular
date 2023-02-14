import { Component } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistsService } from 'src/app/services/artist-service/artists.service';

@Component({
  selector: 'app-artist-put',
  templateUrl: './artist-put.component.html',
  styleUrls: ['./artist-put.component.scss'],
})
export class ArtistPutComponent {
  constructor(private service: ArtistsService) {}

  param: string = '';
  artistToUpdate: IArtist | undefined;

  findId() {
    this.service.getById(this.param).subscribe((artists) => {
      this.artistToUpdate = artists;
      console.log(artists);
    });
  }
}
