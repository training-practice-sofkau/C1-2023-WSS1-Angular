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
  //l_artists2: IArtist[] = [];

  results: number = 0;
  
  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string){
    console.log(param);
    
    if(param=="") this.ngOnInit();
    this.l_artists = [];
    switch(typeSearch){
      case "name":
        ARTISTS.forEach((artist)=>{
          if(artist.name.startsWith(param)) this.l_artists.push(artist);
        });
        this.results = this.l_artists.length;
        break;
      case "country":
        ARTISTS.forEach((artist)=>{
          if(artist.country.startsWith(param)) this.l_artists.push(artist);
        });
        this.results = this.l_artists.length;
        break;
      case "age":
        ARTISTS.forEach((artist)=>{
          var y: number = +param;
          if(artist.age === y) this.l_artists.push(artist);
        });
        this.results = this.l_artists.length;
        break;
    }
  }

}
