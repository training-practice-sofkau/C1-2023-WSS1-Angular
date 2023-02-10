import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Ialbum} from "../../models/album.interface";
import {ALBUMS} from "../../mocks/album.mock";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() {
  }

  search(typeSearch: string,album: Ialbum[], param: string): Observable<Ialbum[]> {
    if(typeSearch === "title"){
      return new Observable<Ialbum[]>(observer => {
        observer.next(album.filter(a => a.title.includes(param)));
        observer.complete();
      });
    }else if(typeSearch === "genre"){
      return new Observable<Ialbum[]>(observer => {
        observer.next(album.filter(a => a.genre.includes(param)));
        observer.complete();
      });
    }else if(typeSearch === "releaseDate"){
      return new Observable<Ialbum[]>(observer => {
        observer.next(album.filter(a => a.releaseDate.includes(param)));
        observer.complete();
      });
    }
    return new Observable<Ialbum[]>(observer => {
      observer.next(album);
      observer.complete();
    });
  }

}


