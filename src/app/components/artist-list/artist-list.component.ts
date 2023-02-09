import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  page: number = 1;
  param: string = '';
  results: number = 0;
  artistsList: IArtist[] = [];

  ngOnInit(): void {
    this.artistsList = ARTISTS;
    this.results = this.artistsList.length;
  }

  filter(typeSearch: string) {
    if (typeSearch == 'name') {
      const filteredList = this.artistsList.filter((item) =>
        item.name.toLowerCase().startsWith(this.param.toLocaleLowerCase())
      );
      this.results = filteredList.length;
      this.artistsList = filteredList.sort((x, y) =>
        x.name.localeCompare(y.name)
      );
    }
    if (typeSearch == 'age') {
      const filteredList = this.artistsList.filter(
        (item) => item.age == parseInt(this.param)
      );
      this.results = filteredList.length;
      this.artistsList = filteredList.sort((x, y) =>
        x.name.localeCompare(y.name)
      );
    }
    if (typeSearch == 'country') {
      const filteredList = this.artistsList.filter((item) =>
        item.country.toLowerCase().startsWith(this.param.toLocaleLowerCase())
      );
      this.results = filteredList.length;
      this.artistsList = filteredList.sort((x, y) =>
        x.name.localeCompare(y.name)
      );
    }
  }
}
