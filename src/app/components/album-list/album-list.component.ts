import { Component, Input, OnInit } from '@angular/core';
import { ALBUM } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{
  @Input() param: string = "";

  //Variables to store the info
  l_albums: IAlbum[] = [];
  results: number = 0;
  p: number=0;

  ngOnInit(): void {
    this.l_albums = ALBUM.sort((a,b) => (a.songs<b.songs)?1:-1);
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string, typeSearch: string): void{
    //console.log(param);
    if(param=="") this.ngOnInit();
    this.l_albums = [];
    switch(typeSearch){
      case "title":
        ALBUM.forEach((album)=>{
          if(album.title.startsWith(param)) this.l_albums.push(album);
        });
        this.results = this.l_albums.length;
        break;
      case "artist":
        ALBUM.forEach((album)=>{
          if(album.artist.startsWith(param)) this.l_albums.push(album);
        });
        this.results = this.l_albums.length;
        break;
      case "songs":
        ALBUM.forEach((album)=>{
          var y: number = +param;
          if(album.songs === y) this.l_albums.push(album);
        });
        this.results = this.l_albums.length;
        break;
    }
  }

}
