import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  @Input() param: string = "";
  @Input() typeSearch: string = "";

  l_albums: IAlbum[] = [];
  results: number = 0;
  p: number = 1;


  toLowerCase = (data: string): string => {
    return data.toLowerCase();
  }


  ngOnInit(): void {
    this.l_albums = ALBUMS;
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string) {
    this.l_albums = ALBUMS;

    switch (this.typeSearch) {
      case "title": {
        this.l_albums = this.l_albums.filter(album => this.toLowerCase(album.title).startsWith(this.toLowerCase(param)));
        break;
      }
      case "genre": {
        this.l_albums = this.l_albums.filter(album => this.toLowerCase(album.genre).startsWith(this.toLowerCase(param)));
        break;
      }
      case "number_of_songs": {
        this.l_albums = this.l_albums.filter(album => album.number_of_songs === parseInt(param));
        break;
      }
      default: {
        this.l_albums = ALBUMS;
        break;
      }
    }
    this.results = this.l_albums.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
/*     console.log("On changes working ");
    console.log("Type",this.typeSearch);
    console.log("Param",this.param);
    console.log("Length", this.l_albums.length) */
    this.ngOnSearch(this.param);
  }
}
