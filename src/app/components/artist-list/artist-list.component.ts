import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  results: number = 0;
  p: number = 1;
  count: number = 3;

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearchByName(param: string, typeSearch: string){
    this.l_artists = this.l_artists.filter((artist) => artist.name.toLowerCase().includes(param.toLowerCase())).sort((a, b) => (a.name > b.name ) ? 1 : -1);
    this.results = this.l_artists.length;
    this.p = 1;
  }

  ngOnSearchByCountry(param: string, typeSearch: string){
    this.l_artists = this.l_artists.filter((artist) => artist.country.toLowerCase().includes(param.toLowerCase())).sort((a, b) => (a.country > b.country ) ? 1 : -1);
    this.results = this.l_artists.length;
    this.p = 1;
  }

  ngOnSearchByAge(param: string, typeSearch: string){
    this.l_artists = this.l_artists.filter((artist) => artist.age.toString().includes(param)).sort((a, b) => (a.age > b.age ) ? 1 : -1);
    this.results = this.l_artists.length;
    this.p = 1;
  }

  ngInputReset(){
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

}
