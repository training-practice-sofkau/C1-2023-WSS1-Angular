import { Component, OnInit, Input } from '@angular/core';

import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  constructor(private service: ArtistService) {}

  myParam: string = '';

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];
  pagination_artist: IArtist[] = [];


  results: number = 0;

  currentPage: number = 1;

  rows: number = 3;

  ngOnInit(): void {
    //this.service.getAll().subscribe((artist) => (this.l_artists = artist));
    this.pagination_artist = this.paginationList();
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  onSearch() {

    //this.service.getAll().subscribe((artist) => (this.l_artists = artist));
    const MYINDICATOR = this.myParam.match(/[:><-]/g) || [];

    const MYPARAMS = this.myParam.split(MYINDICATOR[0]);

    let myfilter: string =
      Object.keys(this.l_artists[0]).find((pro) =>
        pro.toLocaleLowerCase().includes(MYPARAMS[0].toLocaleLowerCase())
      ) || '';

    let isNumber: boolean = false;
    [this.l_artists[0]].filter((art) => {
      if (typeof art[myfilter as keyof IArtist]?.valueOf() == 'number') {
        isNumber = true;
      }
    });

    if(isNumber){
      switch(MYINDICATOR[0]){
        case '>':
          //this.service.getGreaterThan(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_artists=ar)
          break
        case '<':
          //this.service.getLessThan(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_artists=ar)
          break
        case '-':
          //this.service.getExcludeResults(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_artists=ar)
          break
        default:
          console.log("can not filter");  

      }

    }else{
      switch(MYINDICATOR[0]){
        case ':':
          //this.service.getByStartWithString(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_artists=ar)
          break
        case '-':
          //this.service.getByNoStartWithString(myfilter,MYPARAMS[1]).subscribe(ar=>this.l_artists=ar)
          break
        default:
          console.log("can not filter");  

      }

    }

    this.results = this.l_artists.length;
    this.currentPage = 1;
    this.pagination_artist = this.paginationList();
  }

  paginationList(): IArtist[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.l_artists.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_artist = this.paginationList();
  }


}
