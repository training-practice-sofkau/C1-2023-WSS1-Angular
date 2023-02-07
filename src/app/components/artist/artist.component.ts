import { Component, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  @Input() artist: IArtist | undefined;
}
