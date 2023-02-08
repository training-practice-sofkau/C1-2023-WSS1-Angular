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
  searchResulst: IArtist[] = [];
  searchParam: string = '';
  results: number = 0;

  ngOnInit(): void {
    this.artists = ARTISTS;
    this.searchResulst = this.artists;
    this.results = this.artists.length;
  }

  ngOnSearch(param : any, typeSearch: string) {
    console.log(param + ' ' + typeSearch);
    switch (typeSearch) {
      case 'name':
        this.searchResulst = this.searchByTitle(this.artists, param);
        break;
      case 'country':
        this.searchResulst = this.searchByGenre(this.artists, param);
        break;
      case 'age':
        this.searchResulst = this.searchByArtist(this.artists, param);
        break;
      default:
        console.log('Error filtering the list');
        break;
    }
    this.results=this.searchResulst.length;
  }
  searchByTitle(artists: IArtist[], param: string) {
    return artists
      .filter((album) =>
        album.name.toLowerCase().includes(param.toLowerCase())
      )
      .sort((a, b) => {
        a.name.toLowerCase();
        b.name.toLowerCase();
        return a.name.localeCompare(b.name);
      });
  }
  searchByGenre(artists: IArtist[], param: string) {
    return artists
      .filter((album) =>
        album.country.toLowerCase().includes(param.toLowerCase())
      )
      .sort((a, b) => {
        a.country.toLowerCase();
        b.country.toLowerCase();
        return a.country.localeCompare(b.country);
      });
  }
  searchByArtist(artists: IArtist[], param: number) {
    return artists
      .filter((album) =>
        album.age==param
      )
      .sort((a, b) => a.age-b.age);
  }

}
