import { Component, OnInit, Input } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  filterOption: string = "";
  @Input() filterParam: string = "";

  //TO-DO: Define a variable that will store the information
  albumList: IAlbum[] = [];

  results: IAlbum[] = []

  ngOnInit(): void {
    this.albumList = ALBUMS;
    this.results = ALBUMS;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(){
    switch(this.filterOption){
      case "title": {
        this.results = this.albumList.filter(album => album.title.startsWith(this.filterParam));
        break;
      }
      case "artist": {
        this.results = this.albumList.filter(album => album.artist.startsWith(this.filterParam));
        break;
      }
      case "songs": {
        this.results = this.albumList.sort((a, b) => (a.songs > b.songs) ? -1 : 1);
        break;
      }
    }
  }
}
