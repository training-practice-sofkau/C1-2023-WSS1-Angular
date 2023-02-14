import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }


/*   getAll(): Observable<IAlbum[]> {
    let obsArtist: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsArtist;
  } */

  getByTitle(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => this.toLowerCase(album.name).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByNoTitle(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => !this.toLowerCase(album.name).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByMoreTitle(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => {
            if (this.toLowerCase(album.name).localeCompare(this.toLowerCase(param))==1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByLessTitle(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => {
            if (this.toLowerCase(album.name).localeCompare(this.toLowerCase(param))==-1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByGenre(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => this.toLowerCase(album.genre).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByNotGenre(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => !this.toLowerCase(album.genre).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByMoreGenre(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => {
            if (this.toLowerCase(album.genre).localeCompare(this.toLowerCase(param))==1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByLessGenre(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(
          album => {
            if (this.toLowerCase(album.genre).localeCompare(this.toLowerCase(param))==-1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByNumberOfSongs(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(album => album.totalSongs === parseInt(param))
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByNotNumberOfSongs(param: string ,ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(album => album.totalSongs !== parseInt(param))
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByMoreNumberOfSongs(param: string ,ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(album => album.totalSongs > parseInt(param))
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

  getByLessNumberOfSongs(param: string, ALBUMS: IAlbum[]): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS
        .filter(album => album.totalSongs < parseInt(param))
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsAlbums;
  }

}
