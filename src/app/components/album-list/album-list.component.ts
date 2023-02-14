import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent {
  constructor(private albumService: AlbumService) {}

  albums: IAlbum[] = [];
  searchResulst: IAlbum[] = [];
  searchParam: string = '';
  searchBy: number = 0;
  searchOperator: number = 1;
  results: number = 0;

  ngOnInit(): void {
    this.albumService.getAll().subscribe((albums) => {
      this.albums = albums;
      this.searchResulst = albums;
      this.results = this.searchResulst.length;
    });
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch() {
    switch (Number(this.searchBy)) {
      case 0:
        alert('Select an option to proceed with the filter');
        break;
      case 1:
        this.albumService
          .filterByTitle(this.albums, this.searchOperator, this.searchParam)
          .subscribe((albums) => {
            this.searchResulst = albums;
            this.results = albums.length;
          });
        break;
      case 2:
        this.albumService
          .filterByGenre(this.albums, this.searchOperator, this.searchParam)
          .subscribe((albums) => {
            this.searchResulst = albums;
            this.results = albums.length;
          });
        break;
      case 3:
        this.albumService
          .filterByArtist(this.albums, this.searchOperator, this.searchParam)
          .subscribe((albums) => {
            this.searchResulst = albums;
            this.results = albums.length;
          });
        break;
      default:
        console.error('Error filtering the list');
        break;
    }
  }
  event(selection: any) {
    this.searchParam=selection[0];
    this.searchBy=selection[1];
    this.searchOperator=selection[2];
    this.ngOnSearch()
  }
}
