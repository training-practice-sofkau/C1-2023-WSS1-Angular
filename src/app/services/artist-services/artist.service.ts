import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  //API url
  api: string = "http://localhost:8080/artists"

  //TO-DO: All the functionalities related to artist
  /*getAll(): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });

    return obsArtist;

  }*/
  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getById(id: string): Observable<any>{
    //return this.http.get(`${this.api}/${id}`);
    return this.http.get(this.api+"/"+id);

  }

  postArtist(artist: IArtist){
    return this.http.post(this.api,artist);
  }

  /*getByDateDebut(){
n
  }*/
}
