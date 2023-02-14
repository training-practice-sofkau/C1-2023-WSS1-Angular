import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistHttpService {

  constructor(private http: HttpClient) { }

  //API url
  api: string = "http://localhost:8080/charts/artists"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByID(param: string): Observable<any> {
    return this.http.get(this.api+"/"+param);
  }

  update(param: string, artist:IArtist): Observable<any> {
    return this.http.put(this.api+"/"+param, artist);
  }
}
