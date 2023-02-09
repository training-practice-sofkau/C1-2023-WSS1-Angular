import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mocks';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album-services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {

  l_albums: IAlbum[] = [];
  pagination_albums: IAlbum[] = [];

  results: number = 0;

  currentPage: number = 1;

  rows: number = 3;

  myParam:string = ''

  constructor(private serviceAlbum:AlbumService){}

  ngOnInit(): void {
    this.serviceAlbum.getAll().subscribe(al=>this.l_albums=al)
    this.pagination_albums = this.paginationList();
    this.results = this.l_albums.length;
  }

  onSearch() {

    this.serviceAlbum.getAll().subscribe(al=>this.l_albums=al)

    const MYINDICATOR = this.myParam.match(/[:><-]/g) || [];

    const MYPARAMS = this.myParam.split(MYINDICATOR[0]);

    let myfilter: string =
      Object.keys(this.l_albums[0]).find((pro) =>
        pro.toLocaleLowerCase().includes(MYPARAMS[0].toLocaleLowerCase())
      ) || '';

    let isNumber: boolean = false;

    [this.l_albums[0]].filter((art) => {
      if (typeof art[myfilter as keyof IAlbum]?.valueOf() == 'number') {
        isNumber = true;
      }
    });

    if(isNumber){
      switch(MYINDICATOR[0]){
        case '>':
          this.serviceAlbum.getGreaterThan(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_albums=ar)
          break
        case '<':
          this.serviceAlbum.getLessThan(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_albums=ar)
          break
        case '-':
          this.serviceAlbum.getExcludeResults(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_albums=ar)
          break
        default:
          console.log("can not filter");  

      }

    }else{
      switch(MYINDICATOR[0]){
        case ':':
          this.serviceAlbum.getByStartWithString(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_albums=ar)
          break
        case '-':
          this.serviceAlbum.getByNoStartWithString(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_albums=ar)
          break
        default:
          console.log("can not filter");  

      }

    }

    this.results = this.l_albums.length;
    this.currentPage = 1;
    this.pagination_albums = this.paginationList();
  }

  paginationList(): IAlbum[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.l_albums.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_albums = this.paginationList();
  }
}
