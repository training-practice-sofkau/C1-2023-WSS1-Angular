import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  @Input() param: string = '';
  artists: IArtist[] = ARTISTS;
  l_artists: IArtist[] = [];

  results: number = 0;
  filter: string = 'name';
  p: number = 1;

  ngOnInit(): void {
    this.l_artists = this.artists;
    this.results = this.l_artists.length;
  }


  ngOnSearch() {
    if (this.filter === 'name') {
      this.l_artists = this.artists
        .filter((artist) =>
          artist.name.toLowerCase().includes(this.param.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    if (this.filter === 'country') {
      this.l_artists = this.artists
        .sort((a, b) => a.country.localeCompare(b.country))
        .filter((artist) =>
          artist.country.toLowerCase().includes(this.param.toLowerCase())
        );
    }
    if (this.filter === 'age') {
      this.param === "" ?
      this.l_artists = this.artists
        .sort((a, b) => b.age - a.age) : 
      this.l_artists = this.artists
        .sort((a, b) => b.age - a.age)
        .filter((artist) => artist.age === parseInt(this.param));
    }
    this.results = this.l_artists.length;
  }
}
