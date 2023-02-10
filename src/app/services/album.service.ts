import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../models/album.interface';
import { ALBUMS } from '../mocks/album.mock';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAll(): Observable<IAlbum[]> {

    let obsAlbum: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsAlbum;
  }

  getByTitle(filterParam: string, albumList: IAlbum[]): Observable<IAlbum[]> {

    let obsAlbum: Observable<IAlbum[]> = new Observable(observer =>{
      observer.next(albumList.filter(album => album.title.startsWith(filterParam)));
      observer.complete();
    });
    return obsAlbum;
  }

  getByArtist (filterParam: string, albumList: IAlbum[]): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(albumList.filter(album => album.artist.startsWith(filterParam)));
      observer.complete();
    });

    return obsAlbum;
  }

  getBySongs (filterParam: string, albumList: IAlbum[]): Observable<IAlbum[]> {
    if (filterParam){
      if (parseInt(filterParam)){
        let obsAlbum: Observable<IAlbum[]> = new Observable(observer => {
          observer.next(albumList.filter(album => album.songs >= parseInt(filterParam))
            .sort((a, b) => (a.songs > b.songs) ? -1 : 1));
          observer.complete()
        });
        return obsAlbum;
      };
    };
    let obsAlbum: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(albumList.sort((a, b) => (a.songs > b.songs) ? -1 : 1));
      observer.complete();
    });
    return obsAlbum;
  };
}
