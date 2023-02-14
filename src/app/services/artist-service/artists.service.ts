import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private http: HttpClient) {}

  api: string = 'http://localhost:8080/api/artists';

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.api + '/' + id);
  }

  postArtist(artist: IArtist) {
    return this.http.post(this.api, artist);
  }

  putArtist(artist: IArtist): Observable<any> {
    return this.http.put(this.api, artist);
  }

  deleteArtist(id: string) {
    return this.http.delete(this.api + '/' + id);
  }
}
