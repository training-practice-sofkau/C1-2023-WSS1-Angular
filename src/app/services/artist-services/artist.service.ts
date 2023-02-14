import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IArtist } from 'src/app/models/artist.interface';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/artists"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getById(id: string): Observable<any> {
      return this.http.get(`${this.api}/${id}`)
  }

  postArtist(artist: IArtist){
    return this.http.post(this.api,artist);
  }

  getCurretArtist(id: string){
    return this.http.get(`${this.api}/${id}`)
  }

  updateArtist(id: string, data: any){
    return this.http.put(`${this.api}/${id}`, data)
  }

  deleteArtist(id: string){
    return this.http.delete(`${this.api}/${id}`)
  }

}



