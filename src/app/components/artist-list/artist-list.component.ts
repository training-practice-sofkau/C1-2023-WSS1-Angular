import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit, OnChanges {

  @Input() param: string = "";
  @Input() typeSearch: string = "";

  l_artists: IArtist[] = [];
  results: number = 0;
  p: number = 1;

  constructor(private service:ArtistService){}

  toLowerCase = (data: string): string => {
    return data.toLowerCase();
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

  ngOnSearch(param: string) {

    this.l_artists = ARTISTS;

    switch (this.typeSearch) {
      case "name": {
        this.l_artists = this.l_artists
          this.service.getByName(param).subscribe(artists => this.l_artists= artists);
          this.results = this.l_artists.length;
        break;
      }
      case "country": {
        this.l_artists = this.l_artists
          this.service.getByCountry(param).subscribe(artists => this.l_artists= artists);
          this.results = this.l_artists.length;
        break;
      }
      case "age": {
        this.l_artists = this.l_artists
          this.service.getByAge(param).subscribe(artists => this.l_artists= artists);
          this.results = this.l_artists.length;
        break;
      }
      default: {
        this.l_artists = ARTISTS;
        break;
      }
    }
    this.results = this.l_artists.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnSearch(this.param);
  }

}
