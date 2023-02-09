import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALBUMS } from '../mocks/album.mock';
import { IAlbum } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }


  getAll(): Observable<IAlbum[]> {
    let obsArtist: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsArtist;
  }

  getByTitle(param: string): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => this.toLowerCase(album.title).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.title < b.title ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByGenre(param: string): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => this.toLowerCase(album.genre).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.title < b.title ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByNumberOfSongs(param: string): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(album => album.number_of_songs === parseInt(param))
        .sort((a, b) => (a.title < b.title ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

}
