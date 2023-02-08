import { Component, Input, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit{

  @Input() param: string = "";

  l_albums: IAlbum[]=[];

  results: number = 0;

  ngOnInit(): void{
    this.l_albums = ALBUMS;
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string, typeSearch: string){
    console.log(param)
    if (typeSearch === 'title'){
      this.l_albums = ALBUMS.filter(album => album.title.includes(param));
      this.results = this.l_albums.length;
    }
    if (typeSearch === 'genre'){
      this.l_albums = ALBUMS.filter(album => album.genre.includes(param));
      this.results = this.l_albums.length;
    }
    if(typeSearch ==='date'){
      this.l_albums = ALBUMS.sort((a,b) => {return b.date - a.date});
      this.results = this.l_albums.length;
    }
  }



}
