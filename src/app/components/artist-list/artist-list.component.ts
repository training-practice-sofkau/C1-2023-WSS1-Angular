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
    this.artistService.getAll().subscribe({
      next: (data) => {
        this.artists = data
        this.l_artists = this.artists;
        this.results = this.l_artists.length;
      },
      error: (err) => {console.log("Error on getting artists:" + err);},
      complete: () => {}
    });
  }

  ngOnSearch() {
    if (this.filter === 'name') {
      this.artistService
        .filterByName(this.searchingText, this.artists)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'country') {
      this.artistService
        .filterByCountry(this.searchingText, this.artists)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'age') {
      this.artistService
        .filterByAge(this.searchingText, this.artists)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'maxage') {
      this.artistService
        .filterMaximumAge(this.searchingText, this.artists)
        .subscribe((artists) => (this.l_artists = artists));
    }
    if (this.filter === 'noname') {
      this.artistService
        .filterNoName(this.searchingText, this.artists)
        .subscribe((artists) => (this.l_artists = artists));
    }
    this.results = this.l_artists.length;
  }
}
