import { Component, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent {
  @Input() artist: IArtist = {
    age: 0,
    country: "n/a",
    id: 0,
    name: "n/a",
    total_albums: 0,
    year_debut: 0,
  };
}
