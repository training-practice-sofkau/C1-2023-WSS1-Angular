import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  @Input() paramArt: string = "";

  //TO-DO: Define a variable that will store the information
  artistsAll: IArtist[] = ARTISTS;
  l_artists: IArtist[] = [];
  page: number=0;
  results: number = 0;


  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }


  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(paramArt: string, typeSearch: string){
    console.log(paramArt)
    if (typeSearch === 'name'){
      this.l_artists = this.artistsAll.filter(artist => artist.name.includes(paramArt));
      this.results = this.l_artists.length;
    }
    if (typeSearch === 'country'){
      this.l_artists = this.artistsAll.filter(artist => artist.country.includes(paramArt));
      this.results = this.l_artists.length;
    }
    if(typeSearch ==='age'){
      this.l_artists = this.artistsAll.sort((a,b) => {return b.age - a.age});
      this.results = this.l_artists.length;
    }



  }

}


