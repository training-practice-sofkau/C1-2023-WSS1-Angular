import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtist } from '../../models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "localhost:8080/charts/artists/";

  constructor(private httpClient: HttpClient) { }

  getArtists(): Observable<any>{
    return this.httpClient.get(this.url)
  }

}
