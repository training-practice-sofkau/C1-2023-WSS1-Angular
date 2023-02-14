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
  api: string = "http://localhost:8090/charts/artists"


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

  putArtist(artist: IArtist){
    return this.http.put(this.api,artist);
  }

  deleteArtist(id: string){
    return this.http.delete(this.api+"/"+id);
  }


}
