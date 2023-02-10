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

    let obsArtist: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsArtist;
  }

  getByName(filterParam: string, albumList: IAlbum[]): Observable<IAlbum[]> {

    let obsArtist: Observable<IAlbum[]> = new Observable(observer =>{
      observer.next(albumList.filter(album => album.title.startsWith(filterParam)));
      observer.complete();
    });
    return obsArtist;
  }
}
