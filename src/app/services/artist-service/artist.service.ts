import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtist } from 'src/app/models/artist.interface';
import { ARTISTS } from '../../mocks/artist.mock';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  getAll(): Observable<IArtist[]> {
    return new Observable((observer) => {
      observer.next(ARTISTS);
      observer.complete();
    });
  }

  filterByName(searchingText: string): Observable<IArtist[]> {
    return new Observable((observer) => {
      observer.next(
        ARTISTS.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          artist.name.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByCountry(searchingText: string): Observable<IArtist[]> {
    return new Observable((observer) => {
      observer.next(
        ARTISTS.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          artist.country.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByAge(searchingText: string): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(ARTISTS.sort((a, b) => b.age - a.age))
        : observer.next(
            ARTISTS.sort((a, b) => b.age - a.age).filter(
              (artist) => artist.age === parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterMaximumAge(searchingText: string): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(ARTISTS.sort((a, b) => b.age - a.age))
        : observer.next(
            ARTISTS.sort((a, b) => b.age - a.age).filter(
              (artist) => artist.age <= parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterNoName(searchingText: string): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(ARTISTS.sort((a, b) => a.name.localeCompare(b.name)))
        : observer.next(
        ARTISTS.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          !artist.name.toLowerCase().startsWith(searchingText.toLowerCase())!
        )
      );
      observer.complete();
    });
  }
}
