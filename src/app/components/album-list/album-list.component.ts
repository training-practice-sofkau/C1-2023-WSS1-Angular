import {Component, Input} from '@angular/core';
import {Ialbum} from "../../models/album.interface";
import {ALBUMS} from "../../mocks/album.mock";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  @Input() param: string = "";

  l_albums: Ialbum[] = [];

  l_length: number = 0;

  ngOnInit(): void{
    this.l_albums = ALBUMS;
    this.l_length = this.l_albums.length;
  }

}
