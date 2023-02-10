import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/album.interface';
import { ALBUMS } from '../../mocks/albums.mock';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor() {}

  getAll(): Observable<IAlbum[]> {
    return new Observable((observer) => {
      observer.next(ALBUMS);
      observer.complete();
    });
  }

  filterByTitle(searchingText: string): Observable<IAlbum[]> {
    return new Observable((observer) => {
      observer.next(
        ALBUMS.sort((a, b) => a.title.localeCompare(b.title)).filter((album) =>
          album.title.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByArtist(searchingText: string): Observable<IAlbum[]> {
    return new Observable((observer) => {
      observer.next(
        ALBUMS.sort((a, b) => a.artist.localeCompare(b.artist)).filter(
          (album) =>
            album.artist.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByYear(searchingText: string): Observable<IAlbum[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(ALBUMS.sort((a, b) => b.relase_date - a.relase_date))
        : observer.next(
            ALBUMS.sort((a, b) => b.relase_date - a.relase_date).filter(
              (album) => album.relase_date === parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterMinumumSongs(searchingText: string): Observable<IAlbum[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(
            ALBUMS.sort((a, b) => b.number_of_songs - a.number_of_songs)
          )
        : observer.next(
            ALBUMS.sort((a, b) => b.number_of_songs - a.number_of_songs).filter(
              (album) => album.number_of_songs >= parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterNonSingles(): Observable<IAlbum[]> {
    return new Observable((observer) => {
      observer.next(
        ALBUMS.sort((a, b) => b.number_of_songs - a.number_of_songs).filter(
          (album) => album.number_of_songs > 1
        )
      );
      observer.complete();
    });
  }
}
