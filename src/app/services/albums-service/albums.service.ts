import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor() {}

  getAll(): Observable<IAlbum[]> {
    let obsAlbums: Observable<IAlbum[]> = new Observable((observer) => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsAlbums;
  }

  getByTitle(param: string, filter: string): Observable<IAlbum[]> {
    let obsAlbums: Observable<IAlbum[]> = new Observable();

    if (filter === '') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) => album.title.toLowerCase() === param.toLowerCase()
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }

    if (filter === 'starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter((album) =>
            album.title.toLowerCase().startsWith(param.toLowerCase())
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }

    if (filter === 'not starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) =>
              album.title.toLowerCase().charAt(0) !=
              param.toLowerCase().charAt(0)
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }
    return obsAlbums;
  }

  getByGenre(param: string, filter: string): Observable<IAlbum[]> {
    let obsAlbums: Observable<IAlbum[]> = new Observable();

    if (filter === '') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) => album.genre.toLowerCase() === param.toLowerCase()
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }

    if (filter === 'starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter((album) =>
            album.genre.toLowerCase().startsWith(param.toLowerCase())
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }

    if (filter === 'not starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) =>
              album.genre.toLowerCase().charAt(0) !=
              param.toLowerCase().charAt(0)
          ).sort((x, y) => x.title.localeCompare(y.title))
        );
        observer.complete();
      });
    }
    return obsAlbums;
  }

  getByArtist(param: string, filter: string): Observable<IAlbum[]> {
    let obsAlbums: Observable<IAlbum[]> = new Observable();

    if (filter === '') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) => album.artist.toLowerCase() === param.toLowerCase()
          ).sort((x, y) => x.artist.localeCompare(y.artist))
        );
        observer.complete();
      });
    }

    if (filter === 'starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter((album) =>
            album.artist.toLowerCase().startsWith(param.toLowerCase())
          ).sort((x, y) => x.artist.localeCompare(y.artist))
        );
        observer.complete();
      });
    }

    if (filter === 'not starts with') {
      obsAlbums = new Observable((observer) => {
        observer.next(
          ALBUMS.filter(
            (album) =>
              album.artist.toLowerCase().charAt(0) !=
              param.toLowerCase().charAt(0)
          ).sort((x, y) => x.artist.localeCompare(y.artist))
        );
        observer.complete();
      });
    }
    return obsAlbums;
  }
}
