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

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  results: number = 0;

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string) {
    this.l_artists = ARTISTS;
    let myfilter: string =
      Object.keys(this.l_artists[0]).find((pro) =>
        pro.toLocaleLowerCase().includes(typeSearch.toLocaleLowerCase())
      ) || '';
    let isNumber: boolean = false;
    this.l_artists = this.l_artists.filter((art) => {
      if (typeof art[myfilter as keyof IArtist]?.valueOf() == 'number') {
        isNumber = true;
        if (param.length == 0) return art;
        return art[myfilter as keyof IArtist]?.valueOf() == param;
      }
      return art[myfilter as keyof IArtist]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(param.toLocaleLowerCase());
    });
    this.results = this.l_artists.length;
    if (this.results > 0) {
      this.l_artists.sort((a, b) =>
        (a[myfilter as keyof IArtist]?.valueOf() ||
        1 )> (b[myfilter as keyof IArtist]?.valueOf() || 1)
          ? 1
          : -1
      );
    }
    if (isNumber) this.l_artists.reverse();
  }
}
