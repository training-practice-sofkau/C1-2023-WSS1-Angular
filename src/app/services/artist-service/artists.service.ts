import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor() {}

  getAll(): Observable<IArtist[]> {
    let obsArtists: Observable<IArtist[]> = new Observable((observer) => {
      observer.next(ARTISTS);
      observer.complete();
    });
    return obsArtists;
  }

  getByName(param: string, filter: string): Observable<IArtist[]> {
    let obsArtists: Observable<IArtist[]> = new Observable();

    if (filter === '') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter(
            (artist) => artist.name.toLowerCase() === param.toLowerCase()
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }

    if (filter === 'Starts with') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter((artist) =>
            artist.name.toLowerCase().startsWith(param.toLowerCase())
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }

    if (filter === 'Not starts with') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter(
            (artist) =>
              artist.name.toLowerCase().charAt(0) !=
              param.toLowerCase().charAt(0)
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }
    return obsArtists;
  }

  getByAge(param: string, filter: string): Observable<IArtist[]> {
    let obsArtists: Observable<IArtist[]> = new Observable();

    if (filter === '') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter((artist) => artist.age === parseInt(param)).sort(
            (x, y) => x.name.localeCompare(y.name)
          )
        );
        observer.complete();
      });
    }

    if (filter === 'Greater than') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter((artist) => artist.age > parseInt(param)).sort(
            (x, y) => x.name.localeCompare(y.name)
          )
        );
        observer.complete();
      });
    }

    if (filter === 'Less than') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter((artist) => artist.age < parseInt(param)).sort(
            (x, y) => x.name.localeCompare(y.name)
          )
        );
        observer.complete();
      });
    }

    return obsArtists;
  }

  getByCountry(param: string, filter: string): Observable<IArtist[]> {
    let obsArtists: Observable<IArtist[]> = new Observable();

    if (filter === '') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter(
            (artist) => artist.country.toLowerCase() === param.toLowerCase()
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }

    if (filter === 'Starts with') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter((artist) =>
            artist.country.toLowerCase().startsWith(param.toLowerCase())
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }

    if (filter === 'Not starts with') {
      obsArtists = new Observable((observer) => {
        observer.next(
          ARTISTS.filter(
            (artist) =>
              artist.country.toLowerCase().charAt(0) !=
              param.toLowerCase().charAt(0)
          ).sort((x, y) => x.name.localeCompare(y.name))
        );
        observer.complete();
      });
    }
    return obsArtists;
  }
}
