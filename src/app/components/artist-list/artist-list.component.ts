import {Component, OnInit, Input} from '@angular/core';
import {ARTISTS} from 'src/app/mocks/artist.mock';
import {IArtist} from 'src/app/models/artist.interface';
import {ALBUMS} from "../../mocks/album.mock";
import {Ialbum} from "../../models/album.interface";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {

  @Input() param: string = "";

  l_artists: IArtist[] = [];

  results: number = 0;

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  search(param: string, typeSearch: string) {
    switch (typeSearch){
      case "name":
        this.l_artists = ARTISTS;
        this.filterAlbumByName(this.l_artists,param);
        this.results = this.l_artists.length;
        break;
      case "country":
        this.l_artists = ARTISTS;
        this.filterAlbumByCountry(this.l_artists,param);
        this.results = this.l_artists.length;
        break;
      case "age":
        this.l_artists = ARTISTS;
        this.filterAlbumByAge(this.l_artists,param);
        this.results = this.l_artists.length;
        break;
      default:
        this.l_artists = ARTISTS;
        console.log("No filter");
        this.results = this.l_artists.length;
        break;
    }
  }

  filterAlbumByName(artist: IArtist[], filter: string): IArtist[]{
    return this.l_artists = artist.filter(a => a.name.includes(filter));
  }
  filterAlbumByCountry(artists: IArtist[], filter: string): IArtist[]{
    return this.l_artists = artists.filter(a => a.country.includes(filter));
  }
  filterAlbumByAge(artist: IArtist[], filter: string): IArtist[]{
    return this.l_artists = artist.filter(a => a.age == Number(filter));
  }
}
