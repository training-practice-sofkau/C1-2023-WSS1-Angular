import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IArtist} from "../../models/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() {
  }

  search(typeSearch: string, artist: IArtist[], param: string): Observable<IArtist[]> {
    if (typeSearch === "name") {
      return new Observable<IArtist[]>(observer => {
        observer.next(artist.filter(a => a.name.includes(param)));
        observer.complete();
      });
    } else if (typeSearch === "country") {
      return new Observable<IArtist[]>(observer => {
        observer.next(artist.filter(a => a.country.includes(param)));
        observer.complete();
      });
    } else if (typeSearch === "age") {
      return new Observable<IArtist[]>(observer => {
        observer.next(artist.filter(a => a.age == Number(param)));
        observer.complete();
      });
    }
    return new Observable<IArtist[]>(observer => {
      observer.next(artist);
      observer.complete();
    });
  }

}
