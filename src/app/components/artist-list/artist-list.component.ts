import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../../mocks/artist.mock';
import { IArtist } from '../../models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  //TO-DO: Define a variable that will store the information
  artists: IArtist[] = [];
  searchParam: string = '';
  results: number = 0;

  ngOnInit(): void {
    this.artists = ARTISTS;
    this.results = this.artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string) {
    console.log(param);
  }
}
