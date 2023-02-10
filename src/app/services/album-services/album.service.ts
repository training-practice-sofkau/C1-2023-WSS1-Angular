import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ALBUM } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  organizedList(albumList: Observable<IAlbum[]>): Observable<IAlbum[]> {
    return albumList.pipe(
      map(rest => rest.sort((a, b) => (a.songs < b.songs) ? 1 : -1)))
  }

  getAll(): Observable<IAlbum[]> {

    let obsAlbum: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUM);
      observer.complete();
    });

    return this.organizedList(obsAlbum);
  }

  getByTitle(title: string): Observable<IAlbum[]>{
    let obsAlbum: Observable<IAlbum[]> = this.getAll();
    if(title.startsWith(":")){
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => 
        albums.filter(
          (album: IAlbum) => album.title.toLowerCase().startsWith(title.substring(1).toLowerCase())))
      );
    } else if (title.startsWith("-")){
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => 
        albums.filter(
          (album: IAlbum) => !album.title.toLowerCase().startsWith(title.substring(1).toLowerCase())))
      );
    }
    return obsAlbum;
  }

  getByArtist(artistName: string): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = this.getAll();
    if(artistName.startsWith(":")){
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => 
        albums.filter(
          (album: IAlbum) => album.artist.toLowerCase().startsWith(artistName.substring(1).toLowerCase())))
      );
    } else if (artistName.startsWith("-")){
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => 
        albums.filter(
          (album: IAlbum) => !album.artist.toLowerCase().startsWith(artistName.substring(1).toLowerCase())))
      );
    }
    return obsAlbum;
  }

  getBySongs(songs: string): Observable<IAlbum[]> {
    let obsAlbum: Observable<IAlbum[]> = this.getAll();
    if(songs.startsWith("<")){
      var songsNumber: number = +songs.substring(1);
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => albums.filter(
          (album:IAlbum) => album.songs <= songsNumber )));
    }else if(songs.startsWith(">")){
      var songsNumber: number = +songs.substring(1);
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => albums.filter(
          (album:IAlbum) => album.songs > songsNumber )));
    }
    else if(songs.startsWith("-")){
      var songsNumber: number = +songs.substring(1);
      obsAlbum = obsAlbum.pipe(
        map((albums: IAlbum[]) => albums.filter(
          (album:IAlbum) => album.songs != songsNumber )));
    }
    return obsAlbum;
  }

  /*
  

  

  
  
  */
}
