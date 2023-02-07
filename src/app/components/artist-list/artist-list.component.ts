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

  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string|number, typeSearch: string){

    this.l_artists= ARTISTS;

    let myAdd: (baseValue: number, increment: number) => number = function (
      x: number,
      y: number
    ): number {
      return x + y;
    };

    switch(typeSearch) {
      case "name": {
        this.l_artists= this.l_artists.filter(artist => this.toLowerCase(artist.name).startsWith(this.toLowerCase(<string>param)));
         break;
      }
      case "country": {
        this.l_artists= this.l_artists.filter(artist => this.toLowerCase(artist.country).startsWith(this.toLowerCase(<string>param)));
         break;
      }
      case "age": {
        this.l_artists= this.l_artists.filter(artist => artist.age === parseInt(<string>param));
        break;
     }
      default: {
        this.l_artists= ARTISTS;
        break;
      }
   }

   this.results = this.l_artists.length;

    console.log(param)
  }

}
