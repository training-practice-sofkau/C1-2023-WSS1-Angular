import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  constructor(private artistService: ArtistService) {}

  searchingText: string = '';
  artists: IArtist[] = [];
  l_artists: IArtist[] = [];
  results: number = 0;
  filter: string = 'name';
  p: number = 1;

  ngOnInit(): void {
    this.artistService
      .getAll()
      .subscribe((artists) => (this.artists = artists));
    this.l_artists = this.artists;
    this.results = this.l_artists.length;
  }

  ngOnSearch() {
    if (this.filter === 'name') {
      this.artistService
        .filterByName(this.searchingText)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'country') {
      this.artistService
        .filterByCountry(this.searchingText)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'age') {
      this.artistService
        .filterByAge(this.searchingText)
        .subscribe((artists) => (this.l_artists = artists));;
    }
    this.results = this.l_artists.length;
  }
}
