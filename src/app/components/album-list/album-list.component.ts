import { Component, Input, OnInit } from '@angular/core';
import { ALBUMS } from '../../mocks/albums.mock';
import { IAlbum } from '../../models/album.interface';
import { AlbumService } from '../../services/album-service/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{

  constructor(private albumService: AlbumService){}

  searchingText: string = "";
  albums: IAlbum[] = ALBUMS;
  l_albums: IAlbum[] = [];
  results: number = 0;
  filter: string = "title";
  p:number = 0;

  ngOnInit(): void {
    this.l_albums = this.albums;
    this.results = this.l_albums.length;
  }

  ngOnSearch() {
    if (this.filter === 'title') {
      this.albumService
        .filterByTitle(this.searchingText)
        .subscribe((albums) => (this.l_albums = albums));
    }
    if (this.filter === 'artist') {
      this.albumService
        .filterByArtist(this.searchingText)
        .subscribe((albums) => (this.l_albums = albums));
    }
    if (this.filter === 'year') {
      this.albumService
        .filterByYear(this.searchingText)
        .subscribe((albums) => (this.l_albums = albums));;
    }
    if (this.filter === 'minsongs') {
      this.albumService
        .filterMinumumSongs(this.searchingText)
        .subscribe((albums) => (this.l_albums = albums));;
    }
    if (this.filter === 'nosingle') {
      this.albumService
        .filterNonSingles()
        .subscribe((albums) => (this.l_albums = albums));;
    }
    this.results = this.l_albums.length;
  }
}
