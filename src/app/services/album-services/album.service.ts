import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

ALBUMS;

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      observer.next(ALBUMS);
      observer.complete();
  })

  getAll(): Observable<IAlbum[]> {
      return this.obsAlbum;
  }

  getByParameter(p:string, s:string, b:string): Observable<IAlbum[]> {

      if(p === "title"){
          if(s === ":"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => items
                                .title.toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => !items
                                .title.toLowerCase().startsWith(b))));
          }
      }else if(p === "genre"){
          if(s === ":"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => items
                                .genre.toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => !items
                                .genre.toLowerCase().startsWith(b))));
          }

      }else if(p === "nsongs"){
          if(s === ":"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => items
                                .number_of_songs.toString().toLowerCase().startsWith(b.toLowerCase()))));
          }else if(s === "-"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => !items
                                .number_of_songs.toString().toLowerCase().startsWith(b))));

          }else if(s === ">"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => items
                                .number_of_songs > parseInt(b, 10))));

          }else if(s === "<"){
              return this.obsAlbum
              .pipe(map(items => items
                        .filter(items => items
                                .number_of_songs < parseInt(b, 10))));
          }

      }

      return this.obsAlbum;

  }


}



