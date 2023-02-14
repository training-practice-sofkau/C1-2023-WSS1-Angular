import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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
  filtersList: string[] = ['Starts with', 'Not starts with'];
  typeSearchList: string[] = ['ID', 'Name', 'Enterprise', 'Country'];

  constructor(private service: ArtistsService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (artist) => {
        (this.artistsList = artist), (this.results = this.artistsList.length);
      },
      error: console.log,
      complete: console.log,
    });
  }

  ngOnSearch() {
    switch (this.typeSearch) {
      case 'ID': {
        if (this.param) {
          this.service.getById(this.param).subscribe({
            next: (artist) => {
              this.artistsList = [artist];
              this.results = this.artistsList.length;
            },
            error: console.log,
            complete: console.log,
          });
        } else {
          alert('Please, enter an ID');
        }
        break;
      }

      case 'Name': {
        if (this.filter === '') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { name: string }) =>
                      artist.name.toLowerCase() === this.param.toLowerCase()
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter((artist: { name: string }) =>
                    artist.name
                      .toLowerCase()
                      .startsWith(this.param.toLowerCase())
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Not starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { name: string }) =>
                      artist.name.toLowerCase().charAt(0) !=
                      this.param.toLowerCase().charAt(0)
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        break;
      }

      case 'Enterprise': {
        if (this.filter === '') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { enterprise: string }) =>
                      artist.enterprise.toLowerCase() ===
                      this.param.toLowerCase()
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter((artist: { enterprise: string }) =>
                    artist.enterprise
                      .toLowerCase()
                      .startsWith(this.param.toLowerCase())
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Not starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { enterprise: string }) =>
                      artist.enterprise.toLowerCase().charAt(0) !=
                      this.param.toLowerCase().charAt(0)
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        break;
      }

      case 'Country': {
        if (this.filter === '') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { country: string }) =>
                      artist.country.toLowerCase() === this.param.toLowerCase()
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter((artist: { country: string }) =>
                    artist.country
                      .toLowerCase()
                      .startsWith(this.param.toLowerCase())
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        if (this.filter === 'Not starts with') {
          this.service
            .getAll()
            .pipe(
              map((artists) =>
                artists
                  .filter(
                    (artist: { country: string }) =>
                      artist.country.toLowerCase().charAt(0) !=
                      this.param.toLowerCase().charAt(0)
                  )
                  .sort((x: { name: string }, y: { name: any }) =>
                    x.name.localeCompare(y.name)
                  )
              )
            )
            .subscribe({
              next: (artists) => {
                (this.artistsList = artists),
                  (this.results = this.artistsList.length);
              },
              error: console.log,
              complete: console.log,
            });
        }

        break;
      }

      default: {
        this.service.getAll().subscribe({
          next: (artist) => {
            this.artistsList = artist;
            this.results = this.artistsList.length;
          },
          error: console.log,
          complete: console.log,
        });
        break;
      }
    }
  }

  deleteArtist() {
    if (confirm('Do you want to delete the Artist?'))
      this.service.deleteArtist(this.param).subscribe({
        error: console.log,
        complete: console.log,
      });
    this.results = this.artistsList.length;
  }

  updateArtist() {}
}
