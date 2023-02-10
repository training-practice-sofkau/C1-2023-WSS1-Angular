import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTISTS } from '../mocks/artist.mock';
import { IArtist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      observer.next(ARTISTS);
      observer.complete();
    });

    return obsArtist;
  }

  filterByName(
    artists: IArtist[],
    operator: number,
    parameter: string
  ): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let artistsFiltered: IArtist[] = artists
        .filter((artist) =>
          this.checkStringCoincidence(artist.name, parameter, operator)
        )
        .sort((a, b) => {
          a.name.toLowerCase();
          b.name.toLowerCase();
          return a.name.localeCompare(b.name);
        });
      observer.next(artistsFiltered);
      observer.complete();
    });

    return obsArtist;
  }

  filterByCountry(
    artists: IArtist[],
    operator: number,
    parameter: string
  ): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let artistsFiltered: IArtist[] = artists
        .filter((artist) =>
          this.checkStringCoincidence(artist.country, parameter, operator)
        )
        .sort((a, b) => {
          a.country.toLowerCase();
          b.country.toLowerCase();
          return a.country.localeCompare(b.country);
        });
      observer.next(artistsFiltered);
      observer.complete();
    });

    return obsArtist;
  }
  filterByAge(
    artists: IArtist[],
    operator: number,
    parameter: number
  ): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let artistsFiltered: IArtist[] = artists
        .filter((artist) =>
          this.checkNumberCoincidence(artist.age, parameter, operator)
        )
        .sort((a, b) => a.age - b.age);
      observer.next(artistsFiltered);
      observer.complete();
    });

    return obsArtist;
  }
  checkStringCoincidence(
    word: string,
    param: string,
    operator: number
  ): boolean | undefined {
    if (operator == 1) {
      return (
        word.toLocaleLowerCase().slice(0, param.length) === param.toLowerCase()
      );
    } else if (operator == 2) {
      return (
        word.toLocaleLowerCase().slice(0, param.length) != param.toLowerCase()
      );
    } else {
      return undefined;
    }
  }
  checkNumberCoincidence(
    age: number,
    param: number,
    operator: number
  ): boolean | undefined {
    switch (operator) {
      case 1:
        if (age == param) return true;
        return false;
      case 2:
        if (age > param) return true;
        return false;
      case 3:
        if (age < param) return true;
        return false;
      case 4:
        if (age != param) return true;
        return false;
      default:
        return undefined;
    }
  }
}
