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
  albumsAll: IAlbum[] = ALBUMS;
  l_albums: IAlbum[]=[];
  page: number = 0;
  results: number = 0;


  ngOnInit(): void{
    this.l_albums = this.albumsAll;
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string, typeSearch: string){
    console.log(param)
    if (typeSearch === 'title'){
      this.l_albums = this.albumsAll.filter(album => album.title.includes(param));
      this.results = this.l_albums.length;
    }
    if (typeSearch === 'genre'){
      this.l_albums = this.albumsAll.filter(album => album.genre.includes(param));
      this.results = this.l_albums.length;
    }
    if(typeSearch ==='date'){
      this.l_albums = this.albumsAll.sort((a,b) => {return b.date - a.date});
      this.results = this.l_albums.length;
    }
  }



}
