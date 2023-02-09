import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  page: number = 1;
  param: string = '';
  results: number = 0;
  albumsList: IAlbum[] = [];

  ngOnInit(): void {
    this.albumsList = ALBUMS;
    this.results = this.albumsList.length;
  }

  filter(typeSearch: string) {
    if (typeSearch == 'title') {
      const filteredList = this.albumsList.filter((item) =>
        item.title.toLowerCase().startsWith(this.param.toLocaleLowerCase())
      );
      this.results = filteredList.length;
      this.albumsList = filteredList.sort((x, y) =>
        x.title.localeCompare(y.title)
      );
    }
    if (typeSearch == 'genre') {
      const filteredList = this.albumsList.filter((item) =>
        item.genre.toLowerCase().startsWith(this.param.toLocaleLowerCase())
      );
      this.results = filteredList.length;
      this.albumsList = filteredList.sort((x, y) =>
        x.title.localeCompare(y.title)
      );
    }
    if (typeSearch == 'artist') {
      const filteredList = this.albumsList.filter((item) =>
        item.artist.toLowerCase().startsWith(this.param.toLocaleLowerCase())
      );
      this.results = filteredList.length;
      this.albumsList = filteredList.sort((x, y) =>
        x.artist.localeCompare(y.artist)
      );
    }
  }
}
