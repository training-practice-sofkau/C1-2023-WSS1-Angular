import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  param: string = '';
  results: number = 0;
  artistsList: IArtist[] = [];

  ngOnInit(): void {
    this.artistsList = ARTISTS;
    this.results = this.artistsList.length;
  }

  filter(typeSearch: string) {
    if (typeSearch == 'name') {
      this.param.toLowerCase();
      const filteredList = this.artistsList.filter((item) =>
        item.name.toLowerCase().includes(this.param)
      );
      this.results = filteredList.length;
      this.artistsList = filteredList;
    }
    if (typeSearch == 'age') {
      const filteredList = this.artistsList.filter(
        (item) => item.age == parseInt(this.param)
      );
      this.artistsList = filteredList;
      this.results = filteredList.length;
    }
    if (typeSearch == 'country') {
      this.param.toLowerCase();
      const filteredList = this.artistsList.filter((item) =>
        item.country.toLowerCase().includes(this.param)
      );
      this.artistsList = filteredList;
      this.results = filteredList.length;
    }
  }
}
