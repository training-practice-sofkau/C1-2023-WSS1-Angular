import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  //TO-DO: All the functionalities related to artist
  getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable((observer) => {
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
  }

}
