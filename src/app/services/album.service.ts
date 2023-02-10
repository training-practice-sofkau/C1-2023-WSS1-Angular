import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALBUMS } from '../mocks/album.mock';
import { IAlbum } from '../models/album.interface';

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

}
