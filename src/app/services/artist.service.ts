import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTISTS } from '../mocks/artist.mock';
import { IArtist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  api: string = "http://localhost:8080/charts/artists";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }
  findById(id : string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }
  deleteRegister(id : string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
  postArtist(artist : IArtist): Observable<any> {
    return this.http.post(this.api,artist);
  }
  patchArtist(artist : IArtist): Observable<any> {
    return this.http.post(this.api,artist);
  }
}
