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
  searchResulst: IAlbum[] = [];
  searchParam: string = '';
  results: number = 0;

  ngOnInit(): void {
    this.albums = ALBUMS;
    this.searchResulst = this.albums;
    this.results = this.albums.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string) {
    console.log(param + ' ' + typeSearch);
    switch (typeSearch) {
      case 'title':
        this.searchResulst = this.searchByTitle(this.albums, param);
        break;
      case 'genre':
        this.searchResulst = this.searchByGenre(this.albums, param);
        break;
      case 'artist':
        this.searchResulst = this.searchByArtist(this.albums, param);
        break;
      default:
        console.log('Error filtering the list');
        break;
    }
    this.results=this.searchResulst.length;
  }
  searchByTitle(albums: IAlbum[], param: string) {
    return albums
      .filter((album) =>
        album.title.toLowerCase().includes(param.toLowerCase())
      )
      .sort((a, b) => {
        a.title.toLowerCase();
        b.title.toLowerCase();
        return a.title.localeCompare(b.title);
      });
  }
  searchByGenre(albums: IAlbum[], param: string) {
    return albums
      .filter((album) =>
        album.genre.toLowerCase().includes(param.toLowerCase())
      )
      .sort((a, b) => {
        a.genre.toLowerCase();
        b.genre.toLowerCase();
        return a.genre.localeCompare(b.genre);
      });
  }
  searchByArtist(albums: IAlbum[], param: string) {
    return albums
      .filter((album) =>
        album.artist.toLowerCase().includes(param.toLowerCase())
      )
      .sort((a, b) => {
        a.artist.toLowerCase();
        b.artist.toLowerCase();
        return a.artist.localeCompare(b.artist);
      });
  }
}
