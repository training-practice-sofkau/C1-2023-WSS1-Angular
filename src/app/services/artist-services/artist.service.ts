import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { IArtist } from 'src/app/models/artist.interface';
import { envDev } from 'src/environments/envDev';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  //API url
  api: string = envDev.url

  getAll(): Observable<any>{
    return this.http.get(this.api+"artists")
  }

  getArtistById(id:string): Observable<any>{
    return this.http.get(this.api+`artists/${id}`) 
  }

  deleteArtist(id:string):Observable<any>{
    return this.http.delete(this.api+`artists/${id}`,{responseType: 'text'})
  }

  addArtist(obj:IArtist):Observable<any>{
    return this.http.post(this.api+"artists",obj)
  }

  editArtist(obj:IArtist):Observable<any>{
    return this.http.put(this.api+`artists`,obj)
  }



  //TO-DO: All the functionalities related to artist
  /*getAll(): Observable<IArtist[]> {
  
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });

    return obsArtist;
  }

  getByStartWithString(myParam:string,myValue:string): Observable<IArtist[]> {
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>ar[myParam as keyof IArtist]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(myValue.toLocaleLowerCase())).sort((a, b) => (a[myParam as keyof IArtist]?.valueOf() ||
      1 )> (b[myParam as keyof IArtist]?.valueOf() || 1)
        ? 1
        : -1))
    );
  }

  getByNoStartWithString(myParam:string,myValue:string): Observable<IArtist[]> {
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>!ar[myParam as keyof IArtist]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(myValue.toLocaleLowerCase())).sort((a, b) => (a[myParam as keyof IArtist]?.valueOf() ||
      1 )> (b[myParam as keyof IArtist]?.valueOf() || 1)
        ? 1
        : -1))
    );
  }

  getGreaterThan(myParam:string,myValue:string): Observable<IArtist[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IArtist]
        ?.valueOf() || 0) > myValue).sort((a, b) => (a[myParam as keyof IArtist]?.valueOf() ||
      1 )> (b[myParam as keyof IArtist]?.valueOf() || 1)
        ? -1
        : 1))
    );
  }

  getLessThan(myParam:string,myValue:string): Observable<IArtist[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IArtist]
        ?.valueOf() || 0) <= myValue).sort((a, b) => (a[myParam as keyof IArtist]?.valueOf() ||
      1 )> (b[myParam as keyof IArtist]?.valueOf() || 1)
        ? -1
        : 1))
    );
  }

  getExcludeResults(myParam:string,myValue:string): Observable<IArtist[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IArtist]
        ?.valueOf() || 0) != myValue).sort((a, b) => (a[myParam as keyof IArtist]?.valueOf() ||
      1 )> (b[myParam as keyof IArtist]?.valueOf() || 1)
        ? -1
        : 1))
    );
  }*/

}
