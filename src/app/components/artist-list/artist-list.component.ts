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
  @Input() searchStrategy: string = "";

  l_artists: IArtist[] = [];
  results: number = 0;
  p: number = 1;

  constructor(private service: ArtistService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

  ngOnSearch(param: string) {

    this.l_artists = ARTISTS;

    switch (this.typeSearch) {
      case "name": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByName(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotName(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreName(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessName(param).subscribe(artists => this.l_artists = artists)
        };
        break;
      }
      case "country": {
        if (this.searchStrategy === "Starts with") {
        this.service.getByCountry(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotCountry(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreCountry(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessCountry(param).subscribe(artists => this.l_artists = artists)
        };
        break;
      }
      case "age": {
        if (this.searchStrategy === "Starts with") {
        this.service.getByAge(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotAge(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreAge(param).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessAge(param).subscribe(artists => this.l_artists = artists)
        };
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
    console.log(this.searchStrategy)
  }

}
