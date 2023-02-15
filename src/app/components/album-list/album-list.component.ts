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

  editAlbum:IAlbum | undefined = undefined

  results: number = 0;

  currentPage: number = 1;

  rows: number = 3;

  myParam: string = '';

  constructor(private serviceAlbum: AlbumService) {}

  ngOnInit(): void {
    this.serviceAlbum.getAll().subscribe((al) => {
      this.l_albums = al;
      console.log(al);
      this.pagination_albums = this.paginationList();
      this.results = this.l_albums.length;
    });
  }

  onSearch() {

    if(this.myParam.length<4){
      this.editAlbum=undefined
      this.serviceAlbum.getAll().subscribe({
        next: (artist) => {
          (this.l_albums = artist),
            (this.pagination_albums = this.paginationList());
          this.results = this.l_albums.length;
        },
        error: console.log,
        complete: console.log,
      });
    }else{
      this.serviceAlbum.getAlbumById(this.myParam).subscribe(({
        next: (res => this.editAlbum=res),
        error: console.log,
        complete: console.log
      }))
    }

    //this.serviceAlbum.getAll().subscribe((al) => (this.l_albums = al));
    /*
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
    */
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

  deleteAlbum(id:string){
    this.serviceAlbum.deleteAlbum(id).subscribe(({
      next: (res) => {
        alert(res)
      },
      error: console.log,
      complete: console.log,
    })) 
  }

  saveAlbum(al:IAlbum){
    console.log(al);
    this.serviceAlbum.addAlbum(al).subscribe(({
      next: (res=> {alert("Album saved")
      this.serviceAlbum.getAll().subscribe({
        next: (artist) => {
          (this.l_albums = artist),
            (this.pagination_albums = this.paginationList());
          this.results = this.l_albums.length;
        },
        error: console.log,
        complete: console.log,
      });
    }),
      error: console.log,
      complete: console.log,
    }))
  }

  updateAlbum(al:IAlbum){
    this.serviceAlbum.updateAlbum(al).subscribe(({
      next: (res=> alert("Updated")),
      error: console.log,
      complete: console.log,
    }))
  }
}
