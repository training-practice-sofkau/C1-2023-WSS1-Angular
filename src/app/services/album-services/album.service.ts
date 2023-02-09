import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ALBUMS } from 'src/app/mocks/album.mocks';
import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAll(): Observable<IAlbum[]> {
    let obsALIAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      observer.next(ALBUMS);
      observer.complete();
    });

    return obsALIAlbum;
  }

  getByStartWithString(myParam:string,myValue:string): Observable<IAlbum[]> {
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>ar[myParam as keyof IAlbum]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(myValue.toLocaleLowerCase())).sort((a, b) => (a[myParam as keyof IAlbum]?.valueOf() ||
      1 )> (b[myParam as keyof IAlbum]?.valueOf() || 1)
        ? 1
        : -1))
    );
  }

  getByNoStartWithString(myParam:string,myValue:string): Observable<IAlbum[]> {
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>!ar[myParam as keyof IAlbum]
        ?.toString()
        .toLocaleLowerCase()
        .startsWith(myValue.toLocaleLowerCase())).sort((a, b) => (a[myParam as keyof IAlbum]?.valueOf() ||
      1 )> (b[myParam as keyof IAlbum]?.valueOf() || 1)
        ? 1
        : -1))
    );
  }

  getGreaterThan(myParam:string,myValue:string): Observable<IAlbum[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IAlbum]
        ?.valueOf() || 0) > myValue).sort((a, b) => (a[myParam as keyof IAlbum]?.valueOf() ||
      1 )> (b[myParam as keyof IAlbum]?.valueOf() || 1)
        ? -1
        : 1))
    );
  }

  getLessThan(myParam:string,myValue:string): Observable<IAlbum[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IAlbum]
        ?.valueOf() || 0) <= myValue).sort((a, b) => (a[myParam as keyof IAlbum]?.valueOf() ||
      1 )> (b[myParam as keyof IAlbum]?.valueOf() || 1)
        ? -1
        : 1))
    );
  }

  getExcludeResults(myParam:string,myValue:string): Observable<IAlbum[]>{
    return this.getAll().pipe(
      map((ar) => ar.filter(ar=>
        (ar[myParam as keyof IAlbum]
        ?.valueOf() || 0) != myValue).sort((a, b) => (a[myParam as keyof IAlbum]?.valueOf() ||
      1 )> (b[myParam as keyof IAlbum]?.valueOf() || 1)
        ? 1
        : -1))
    );
  }
}
