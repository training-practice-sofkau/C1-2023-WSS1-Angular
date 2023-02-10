import { Component, OnInit } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistsService } from 'src/app/services/artist-service/artists.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  page: number = 1;
  param: string = '';
  results: number = 0;
  filter: string = '';
  typeSearch: string = '';
  artistsList: IArtist[] = [];
  typeSearchList: string[] = ['Name', 'Age', 'Country'];
  filtersList: string[] = [
    'Starts with',
    'Not starts with',
    'Greater than',
    'Less than',
  ];

  constructor(private service: ArtistsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => (this.artistsList = artist));
    this.results = this.artistsList.length;
  }

  ngOnSearch() {
    this.artistsList = ARTISTS;

    switch (this.typeSearch) {
      case 'Name': {
        this.service
          .getByName(this.param, this.filter)
          .subscribe((artists) => (this.artistsList = artists));
        break;
      }

      case 'Age': {
        this.service
          .getByAge(this.param, this.filter)
          .subscribe((artists) => (this.artistsList = artists));
        break;
      }

      case 'Country': {
        this.service
          .getByCountry(this.param, this.filter)
          .subscribe((artists) => (this.artistsList = artists));
        break;
      }

      default: {
        this.artistsList = ARTISTS;
        break;
      }
    }
    this.results = this.artistsList.length;
  }
}
