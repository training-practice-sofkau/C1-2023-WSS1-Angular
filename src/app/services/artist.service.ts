import { Injectable } from '@angular/core';
import { filter, map, Observable} from 'rxjs';
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
      return this.obsArtist
      .pipe(map(items => items
                .filter(items => items
                        .name.toLowerCase().startsWith(b))));
  }
}



