import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/api/artists"

  private artist$ = new BehaviorSubject<any>({});
  selectedArtist$ = this.artist$.asObservable();

  setArtist(artist: IArtist) {
    this.artist$.next(artist);
  }


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
    return this.http.post(this.api, artist);
  };

  deleteArtist(artistID: string){
    this.http.delete<HttpResponse<any>>(this.api+"/"+artistID)
    window.alert("Artist deleted successfully.");
  }

  updateArtist(artistID: string, artist: IArtist){
    return this.http.put(`${this.api}/${artistID}`, artist);
  }
}
