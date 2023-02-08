import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit, OnChanges{

  @Input() param: string = "";
  @Input() typeSearch: string = "";

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];
  results: number = 0;
  p: number = 1;

  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string){

    this.l_artists= ARTISTS;

    switch(this.typeSearch) {
      case "name": {
        this.l_artists= this.l_artists
        .filter(artist => this.toLowerCase(artist.name).startsWith(this.toLowerCase(param)))
        .sort((a, b) => (a.name < b.name ? -1 : 1));;
         break;
      }
      case "country": {
        this.l_artists= this.l_artists
        .filter(artist => this.toLowerCase(artist.country).startsWith(this.toLowerCase(param)))
        .sort((a, b) => (a.name < b.name ? -1 : 1));
         break;
      }
      case "age": {
        this.l_artists= this.l_artists
        .filter(artist => artist.age === parseInt(param))
        .sort((a, b) => (a.name < b.name ? -1 : 1));
        break;
     }
      default: {
        this.l_artists= ARTISTS;
        break;
      }
   }
   this.results = this.l_artists.length;
  }



  ngOnChanges(changes: SimpleChanges): void {
/*     console.log("On changes working ");
    console.log("Type",this.typeSearch);
    console.log("Param",this.param);
    console.log("Length", this.l_artists.length) */
    this.ngOnSearch(this.param);
  }

}
