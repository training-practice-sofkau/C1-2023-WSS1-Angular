import { Component, Input } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  @Input() album: IAlbum | undefined;

}
