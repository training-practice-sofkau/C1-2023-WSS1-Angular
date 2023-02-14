import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/api/artists"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getById(id: string): Observable<any>{
    return this.http.get(this.api+"/"+id);
  }

  getByName(filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer =>{
      observer.next(artistList.filter(artist => artist.name.startsWith(filterParam)));
      observer.complete();
    });
    return obsArtist;
  }

  getByCountry (filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(artistList.filter(artist => artist.country.startsWith(filterParam)));
      observer.complete();
    });

    return obsArtist;
  }

  postArtist(artist: IArtist){
    return this.http.post(this.api,artist);
  }
}
