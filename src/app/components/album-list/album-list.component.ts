import { Component, Input, OnInit } from '@angular/core';
import { ALBUMS } from '../../mocks/albums.mock';
import { IAlbum } from '../../models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{
  @Input() param: string = "";
  albums: IAlbum[] = ALBUMS;
  l_albums: IAlbum[] = [];

  results: number = 0;
  filter: string = "title";
  p:number = 0;

  ngOnInit(): void {
    this.l_albums = this.albums;
    this.results = this.l_albums.length;
  }

  ngOnSearch(){
    if (this.filter === 'title') {
      this.l_albums = this.albums
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter((album) =>
          album.title.toLowerCase().includes(this.param.toLowerCase())
        );
    }
    if (this.filter === 'artist') {
      this.l_albums = this.albums
        .sort((a, b) => a.artist.localeCompare(b.artist))
        .filter((album) =>
          album.artist.toLowerCase().includes(this.param.toLowerCase())
        );
    }
    if (this.filter === 'year') {
      this.param === "" ?
      this.l_albums = this.albums
        .sort((a, b) => b.relase_date - a.relase_date) : 
      this.l_albums = this.albums
        .sort((a, b) => b.relase_date - a.relase_date)
        .filter((album) => album.relase_date === parseInt(this.param));
    }
    this.results = this.l_albums.length;
  }
}
