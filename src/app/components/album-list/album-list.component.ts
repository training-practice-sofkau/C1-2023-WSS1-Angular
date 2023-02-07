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
    
  }
}
