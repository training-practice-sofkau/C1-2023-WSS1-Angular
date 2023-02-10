import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

ARTISTS;

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  obsArtist: Observable<IArtist[]> = new Observable((observer) => {
      observer.next(ARTISTS);
      observer.complete();
  })

  getAll(): Observable<IArtist[]> {
      return this.obsArtist;
  }

  getByParameter(p:string, s:string, b:string): Observable<IArtist[]> {

      if(p === "name"){
          if(s === ":"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => items
                                .name.toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => !items
                                .name.toLowerCase().startsWith(b))));
          }
      }else if(p === "country"){
          if(s === ":"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => items
                                .country.toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => !items
                                .country.toLowerCase().startsWith(b))));
          }

      }else if(p === "age"){
          if(s === ":"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => items
                                .age.toString().toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => !items
                                .age.toString().toLowerCase().startsWith(b))));

          }else if(s === ">"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => items
                                .age > parseInt(b, 10))));

          }else if(s === "<"){
              return this.obsArtist
              .pipe(map(items => items
                        .filter(items => items
                                .age < parseInt(b, 10))));
          }

      }

      return this.obsArtist;

  }


}



