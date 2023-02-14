import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';
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

  l_artists_db: IArtist[] = [];
  l_artists: IArtist[] = [];
  results: number = 0;
  p: number = 1;

/*   artist_f: IArtist = {
    artistID: '',
    name: '',
    country: '',
    age: 0,
    debutDate: new Date(),
    type: '',
    enterprise: ''
  }; */

  constructor(private service1: ArtistHttpService, private service: ArtistService) { }


  getAll(): void {
    this.service1.getAll().subscribe({
      next: (artists) => {
        this.l_artists = artists.data,
        this.l_artists_db = artists.data,
        this.results = this.l_artists.length;
        console.log(artists.data)
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnSearch(param: string) {

    //this.l_artists = ARTISTS;

    switch (this.typeSearch) {
      case "name": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByName(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotName(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreName(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessName(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        break;
      }
      case "country": {
        if (this.searchStrategy === "Starts with") {
        this.service.getByCountry(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotCountry(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreCountry(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessCountry(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        break;
      }
      case "age": {
        if (this.searchStrategy === "Starts with") {
        this.service.getByAge(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotAge(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreAge(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessAge(param, this.l_artists_db).subscribe(artists => this.l_artists = artists)
        };
        break;
      }
      case "ID": {
        if (this.searchStrategy === "Starts with") {
        this.service1.getByID(param).subscribe(artists => this.l_artists = [artists.data])
        this.results = this.l_artists.length;
        };
        break;
      }
      default: {
        this.getAll();
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
