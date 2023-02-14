import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IAlbum } from 'src/app/models/album.interface';


@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {

  constructor(private http: HttpClient) { }

  //API url
  api: string = "http://localhost:8080/charts/albums"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getByID(param: string): Observable<any> {
    return this.http.get(this.api+"/"+param);
  }

  post(artist:IAlbum):  Observable<any> {
    return this.http.post(this.api, artist);
  }

}
