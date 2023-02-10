import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  //TO-DO: All the functionalities related to artist
  getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      observer.next(ARTISTS);
      observer.complete();
    });

    return obsArtist;
  }

  getByNameInclude(param: string): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter((artist) => artist.name.startsWith(param));
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;


  }

  getByNameExclude(param: string) {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter((artist) => {
          return !artist.name.startsWith(param);
        });
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;
  }


  getByAgeLess(param: number) {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter(el => el.age <= param).sort((a,b) => {return b.age - a.age}
        );
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;
  }

  getByAgeGreat(param: number) {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter(el => el.age > param).sort((a,b) => {return b.age - a.age}
        );
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;
  }

  getByCountryInclude(param: string): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter((artist) => artist.country.startsWith(param));
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;


  }

  getByCountryExclude(param: string) {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      let resp: IArtist[];
      this.getAll().subscribe((artist) => {
        resp = artist.filter((artist) => {
          return !artist.country.startsWith(param);
        });
        observer.next(resp);
        observer.complete();
      });
    });

    return obsArtist;
  }

}
