import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';



import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient, private cookie:CookieService, private router:Router) { }

  errorMsg: string = '';

  numberResults: number = 0;
  //API url
  api: string = "http://localhost:8080/artists"

  type: string = 'save';

  getType(){
    return this.type;
  }

  changeType(type: string){
    return this.type = type;
  }

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
    return this.http.get(this.api+"/"+id).pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
        } else {
            this.errorMsg = `Error: ${error.message}`;
        }
        return of(0);
    })
    );
  }

  postArtist(artist: IArtist){
    return this.http.post(this.api,artist);
  }

  updateArtist(artist: IArtist){
    console.log(artist)
    console.log(`${this.api}/${artist.artistID}`)
    return this.http.put(`${this.api}/${artist.artistID}`, artist).subscribe({
      next: (data) => {
        alert("Dear client, the artist: " + artist.name + " was modified. Thanks. Bye!"),
        this.cookie.deleteAll()
        this.router.navigate(['/artist'])
        return data
      },
      error: (err) => alert("Dear client, please check all the info again. with regards the developer team"),
      complete: (console.log)
    })
  }

  deleteById(id: string): Observable<any>{
    return this.http.delete(this.api + '/' + id).pipe(
      catchError(error => {
        if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
        } else {
            this.errorMsg = `Error: ${error.message}`;
        }
        return of(0);
    })
    );
  }

  /*getByDateDebut(){

  }*/
}
