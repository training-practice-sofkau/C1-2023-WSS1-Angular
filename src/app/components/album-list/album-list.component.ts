import {Component, Input, OnInit} from '@angular/core';
import {Ialbum} from "../../models/album.interface";
import {ALBUMS} from "../../mocks/album.mock";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{

  @Input() param: string = "";

  l_albums: Ialbum[] = [];

  l_length: number = 0;

  pagFrom: number = 0;
  pagTo: number = 1;

  ngOnInit(): void{
    this.l_albums = ALBUMS;
    this.l_length = this.l_albums.length;
  }


  search(param: string, typeSearch: string) {
    switch (typeSearch){
      case "title":
        this.l_albums = ALBUMS;
        this.filterAlbumByTitle(this.l_albums,param);
        this.l_length = this.l_albums.length;
        break;
      case "genre":
        this.l_albums = ALBUMS;
        this.filterAlbumByGenre(this.l_albums,param);
        this.l_length = this.l_albums.length;
        break;
      case "releaseDate":
        this.l_albums = ALBUMS;
        this.filterAlbumByReleaseDate(this.l_albums,param);
        this.l_length = this.l_albums.length;
        break;
      default:
        this.l_albums = ALBUMS;
        console.log("No filter");
        this.l_length = this.l_albums.length;
        break;
    }
  }

  filterAlbumByTitle(albums: Ialbum[],filter: string): Ialbum[]{
    return this.l_albums = albums.filter(a => a.title.includes(filter));
  }
  filterAlbumByGenre(albums: Ialbum[],filter: string): Ialbum[]{
    return this.l_albums = albums.filter(a => a.genre.includes(filter));
  }
  filterAlbumByReleaseDate(albums: Ialbum[],filter: string): Ialbum[]{
    return this.l_albums = albums.filter(a => a.releaseDate.includes(filter));
  }

  changePage(change: boolean){
    console.log(this.pagTo);
    if(change){
      if(!(this.pagTo == this.l_length-1)){
        this.pagFrom +=2;
        this.pagTo +=2;
      }
    }else if(!change){
      if(!(this.pagFrom == 0)) {
        this.pagFrom -= 2;
        this.pagTo -= 2;
      }
    }

  }
}
