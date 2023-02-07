import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  //TO-DO: Define a variable that will store the information
  albums: IAlbum[] = [];
  searchParam: string = '';
  results: number = 0;

  ngOnInit(): void {
    this.albums = ALBUMS;
    this.results = this.albums.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string) {
    console.log(param + typeSearch);
  }
}
