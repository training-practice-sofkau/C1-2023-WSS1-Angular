import { Component } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumHttpService } from 'src/app/services/album-http.service';

@Component({
  selector: 'app-album-put',
  templateUrl: './album-put.component.html',
  styleUrls: ['./album-put.component.scss']
})
export class AlbumPutComponent {

  constructor(private service: AlbumHttpService) { }

  param: string = "";
  album: IAlbum|undefined;

  onIDSearch () {
    this.service.getByID(this.param).subscribe(albums => {
      this.album = albums.data
      console.log(albums.data)
    })

  }
}
