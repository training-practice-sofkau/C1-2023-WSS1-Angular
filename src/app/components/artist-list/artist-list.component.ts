import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../../mocks/artist.mock';
import { IArtist } from '../../models/artist.interface';
import { FormControl } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  constructor(private artistService: ArtistService) {}

  artists: IArtist[] = [];
  searchResulst: IArtist[] = [];
  searchParam: string = '';
  searchBy: number = 0;
  searchOperator: number = 1;
  results: number = 0;

  ngOnInit(): void {
    this.artistService.getAll().subscribe((artists) => {
      this.artists = artists;
      this.searchResulst = artists;
      this.results = this.searchResulst.length;
    });
  }

  ngOnSearch() {
    switch (Number(this.searchBy)) {
      case 0:
        alert('Select an option to proceed with the filter');
        break;
      case 1:
        this.artistService
          .filterByName(this.artists, this.searchOperator, this.searchParam)
          .subscribe((artists) => {
            this.searchResulst = artists;
            this.results = artists.length;
            this.results = this.searchResulst.length;
          });
        break;
      case 2:
        this.artistService
          .filterByCountry(this.artists, this.searchOperator, this.searchParam)
          .subscribe((artists) => {
            this.searchResulst = artists;
            this.results = artists.length;
            this.results = this.searchResulst.length;
          });
        break;
      case 3:
        if (this.searchParam == '') {
          this.artistService
            .filterByAge(this.artists, this.searchOperator, 0)
            .subscribe((artists) => {
              this.searchResulst = artists;
              this.results = artists.length;
              this.results = this.searchResulst.length;
            });
        } else {
          this.artistService
            .filterByAge(
              this.artists,
              this.searchOperator,
              Number(this.searchParam)
            )
            .subscribe((artists) => {
              this.searchResulst = artists;
              this.results = artists.length;
              this.results = this.searchResulst.length;
            });
        }
        break;
      default:
        console.error('Error filtering the list');
        break;
    }
  }
  event(selection: any) {
    this.searchParam = selection[0];
    this.searchBy = selection[1];
    this.searchOperator = selection[2];
    this.ngOnSearch();
  }
}
