import { Component, Input } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_albums: IAlbum[] = [];

  results: number = 0;

  p: number = 1;
  count: number = 3;

  ngOnInit(): void {
    this.l_albums = ALBUMS;
    this.results = this.l_albums.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearchByTitle(param: string){
    this.l_albums = this.l_albums.filter((artist) => artist.title.toLowerCase().includes(param.toLowerCase())).sort((a, b) => (a.title > b.title) ? 1 : -1);
    this.results = this.l_albums.length;
    this.p = 1;
  }

  ngOnSearchByGenre(param: string){
    this.l_albums = this.l_albums.filter((artist) => artist.genre.toLowerCase().includes(param.toLowerCase())).sort((a, b) => (a.genre > b.genre) ? 1 : -1);
    this.results = this.l_albums.length;
    this.p = 1;
  }

  ngOnSearchBySongs(param: string){
    this.l_albums = this.l_albums.filter((artist) => artist.number_of_songs.toString().includes(param)).sort((a, b) => (a.number_of_songs > b.number_of_songs) ? 1 : -1);
    this.results = this.l_albums.length;
    this.p = 1;
  }

  ngInputReset(){
    this.l_albums = ALBUMS;
    this.results = this.l_albums.length;
  }

}
