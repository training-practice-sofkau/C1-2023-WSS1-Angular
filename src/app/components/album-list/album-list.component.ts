import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumsService } from 'src/app/services/albums-service/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  page: number = 1;
  param: string = '';
  results: number = 0;
  filter: string = '';
  typeSearch: string = '';
  albumsList: IAlbum[] = [];
  filtersList: string[] = ['starts with', 'not starts with'];
  typeSearchList: string[] = ['Title', 'Genre', 'Artist'];

  constructor(private service: AlbumsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((album) => (this.albumsList = album));
    this.results = this.albumsList.length;
  }

  ngOnSearch() {
    this.albumsList = ALBUMS;

    switch (this.typeSearch) {
      case 'Title': {
        this.service
          .getByTitle(this.param, this.filter)
          .subscribe((albums) => (this.albumsList = albums));
        break;
      }

      case 'Genre': {
        this.service
          .getByGenre(this.param, this.filter)
          .subscribe((albums) => (this.albumsList = albums));
        break;
      }

      case 'Artist': {
        this.service
          .getByArtist(this.param, this.filter)
          .subscribe((albums) => (this.albumsList = albums));
        break;
      }

      default: {
        this.albumsList = ALBUMS;
        break;
      }
    }
    this.results = this.albumsList.length;
  }
}
