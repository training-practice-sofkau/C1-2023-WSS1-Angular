import { Component } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';

@Component({
  selector: 'app-artist-put',
  templateUrl: './artist-put.component.html',
  styleUrls: ['./artist-put.component.scss']
})
export class ArtistPutComponent {
  constructor(private service: ArtistHttpService) { }

  param: string = "";
  artist: IArtist|undefined;

  onIDSearch () {
    this.service.getByID(this.param).subscribe(artists => {
      this.artist = artists.data
      console.log(artists.data)
    })

  }
}
