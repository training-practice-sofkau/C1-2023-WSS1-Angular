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
  api: string = "http://localhost:8080/artists"
}
