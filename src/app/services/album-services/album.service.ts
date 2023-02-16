import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  api: string = "http://localhost:8080/albums"

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

}



