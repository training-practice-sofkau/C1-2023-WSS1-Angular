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

  l_artists: IArtist[] = [];
  f_artists: IArtist[] = [];

  results: number = 0;
  
  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.f_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string){
    if (param == "") {
        this.f_artists = ARTISTS        
    }

    if (typeSearch === "name") {
        this.f_artists = this.l_artists.filter((obj) => obj.name.toLowerCase().includes(param.toLowerCase()));
    } else if(typeSearch === "country") {
        this.f_artists = this.l_artists.filter((obj) => obj.country.toLowerCase().includes(param.toLowerCase()));
    } else {
        this.f_artists = this.l_artists.filter((obj) => obj.age.toString().toLowerCase().includes(param.toLowerCase()));
    }
    

    this.results = this.f_artists.length
  }

}
