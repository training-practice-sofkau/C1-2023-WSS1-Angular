import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  filterOption: string = "";
  @Input() filterParam: string = "";

  //TO-DO: Define a variable that will store the information
  artistList: IArtist[] = [];

  results: IArtist[] = []

  ngOnInit(): void {
    this.artistList = ARTISTS;
    this.results = ARTISTS;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(){
    switch(this.filterOption){
      case "name": {
        this.results = this.artistList.filter(artist => artist.name.startsWith(this.filterParam));
        break;
      }
      case "genre": {
        this.results = this.artistList.filter(artist => artist.genre.startsWith(this.filterParam));
        break;
      }
      case "albums": {
        this.results = this.artistList.sort((a, b) => (a.albums > b.albums) ? -1 : 1);
        break;
      }
    }
  }



}
