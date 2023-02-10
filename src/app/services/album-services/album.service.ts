import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor() {}

  //TO-DO: All the functionalities related to album
  getAll(): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      observer.next(ALBUMS);
      observer.complete();
    });

    return obsAlbum;
  }

  getByTitleInclude(param: string): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter((album) => album.title.startsWith(param));
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;


  }

  getByTitleExclude(param: string) {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter((album) => {
          return !album.title.startsWith(param);
        });
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;
  }


  getByDateLess(param: number) {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter(el => el.date <= param).sort((a,b) => {return b.date - a.date}
        );
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;
  }

  getByDateGreat(param: number) {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter(el => el.date > param).sort((a,b) => {return b.date - a.date}
        );
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;
  }

  getByGenreInclude(param: string): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter((album) => album.genre.startsWith(param));
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;


  }

  getByGenreExclude(param: string) {
    let obsAlbum: Observable<IAlbum[]> = new Observable((observer) => {
      let resp: IAlbum[];
      this.getAll().subscribe((album) => {
        resp = album.filter((album) => {
          return !album.genre.startsWith(param);
        });
        observer.next(resp);
        observer.complete();
      });
    });

    return obsAlbum;
  }

}
