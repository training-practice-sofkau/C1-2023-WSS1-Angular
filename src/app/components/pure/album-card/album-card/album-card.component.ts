import { Component, Input } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  @Input() album: IAlbum = {
    artist: 'n/a',
    genre: 'n/a',
    number_of_songs: 0,
    release_date: 'n/a',
    title: 'n/a',
  };
}
