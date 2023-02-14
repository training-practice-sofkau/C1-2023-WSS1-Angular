import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALBUMS } from '../mocks/album.mock';
import { IAlbum } from '../models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  api: string = "localhost:8080/charts/artists";

  constructor(private http: HttpClient) { }



  getAll(): Observable<any> {

    let obsArtist: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsArtist;
  }

  filterByTitle(
    artists: IAlbum[],
    operator: number,
    parameter: string
  ): Observable<IAlbum[]> {
    let obsArtist: Observable<IAlbum[]> = new Observable((observer) => {
      let artistsFiltered: IAlbum[] = artists
        .filter((artist) =>
          this.checkStringCoincidence(artist.title, parameter, operator)
        )
        .sort((a, b) => {
          a.title.toLowerCase();
          b.title.toLowerCase();
          return a.title.localeCompare(b.title);
        });
      observer.next(artistsFiltered);
      observer.complete();
    });

    return obsArtist;
  }

  filterByGenre(
    artists: IAlbum[],
    operator: number,
    parameter: string
  ): Observable<IAlbum[]> {
    let obsArtist: Observable<IAlbum[]> = new Observable((observer) => {
      let artistsFiltered: IAlbum[] = artists
        .filter((artist) =>
          this.checkStringCoincidence(artist.genre, parameter, operator)
        )
        .sort((a, b) => {
          a.genre.toLowerCase();
          b.genre.toLowerCase();
          return a.genre.localeCompare(b.genre);
        });
      observer.next(artistsFiltered);
      observer.complete();
    });
    return obsArtist;
  }

  filterByArtist(
    artists: IAlbum[],
    operator: number,
    parameter: string
  ): Observable<IAlbum[]> {
    let obsArtist: Observable<IAlbum[]> = new Observable((observer) => {
      let artistsFiltered: IAlbum[] = artists
        .filter((artist) =>
          this.checkStringCoincidence(artist.artist, parameter, operator)
        )
        .sort((a, b) => {
          a.artist.toLowerCase();
          b.artist.toLowerCase();
          return a.artist.localeCompare(b.artist);
        });
      observer.next(artistsFiltered);
      observer.complete();
    });

    return obsArtist;
  }

  checkStringCoincidence(
    word: string,
    param: string,
    operator: number
  ): boolean | undefined {
    if (operator == 1) {
      return (
        word.toLocaleLowerCase().slice(0, param.length) === param.toLowerCase()
      );
    } else if (operator == 4) {
      return (
        word.toLocaleLowerCase().slice(0, param.length) != param.toLowerCase()
      );
    } else {
      return undefined;
    }
  }


}
