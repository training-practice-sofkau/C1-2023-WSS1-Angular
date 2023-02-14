import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IAlbum } from '../models/album.interface';
import { IArtist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  artistTriger : Subject<IArtist>;
  albumTriger : Subject<IAlbum>;

  constructor() {
    this.artistTriger = new Subject<IArtist>;
    this.albumTriger = new Subject<IAlbum>;
  }
}
