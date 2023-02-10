import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumServicesService {

  constructor() { }

  album_listed: IAlbum[] = [];

  getAll(): Observable<IAlbum[]> {
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS);
      observer.complete();
    });
    return obsAlbums;
  }


  getIncludeOrMoreThanParam(param: string, arg: string): Observable<IAlbum[]>{
    let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
      observer.next(ALBUMS.filter((album) => {
        var type = typeof album[arg as keyof IAlbum]
         if ( type == 'string') {
         return album[arg as keyof IAlbum].toString().toLowerCase().startsWith(param.toLowerCase())
        }
         if (type == 'number') {
        return album[arg as keyof IAlbum] < param;
         }
         return false;
      }).sort((a, b) => (a[arg as keyof IAlbum] > b[arg as keyof IAlbum] ) ? 1 : -1));
});
return obsAlbums;
}


getExcludedOrLessThanParam(param: string, arg: string): Observable<IAlbum[]>{
  let obsAlbums: Observable<IAlbum[]> = new Observable(observer => {
    observer.next(ALBUMS.filter((album) => {
      var type = typeof album[arg as keyof IAlbum]
       if ( type == 'string') {
       return !album[arg as keyof IAlbum].toString().toLowerCase().includes(param.toLowerCase())
      }
       if (type == 'number') {
      return album[arg as keyof IAlbum] > param;
       }
       return true;
    }).sort((a, b) => (a[arg as keyof IAlbum] > b[arg as keyof IAlbum] ) ? 1 : -1));
});
return obsAlbums;
}


  filterParameterType(option: string, param: string): IAlbum[]{
    switch (option) {
      case 'title:':
         this.getIncludeOrMoreThanParam(param, 'title').subscribe((album) => this.album_listed = album);
      break;
      case 'title-':
        this.getExcludedOrLessThanParam(param, 'title').subscribe((album) => this.album_listed = album);
      break;
      case 'genre:':
         this.getIncludeOrMoreThanParam(param, 'genre').subscribe((album) => this.album_listed = album);
      break;
      case 'genre-':
        this.getExcludedOrLessThanParam(param, 'genre').subscribe((album) => this.album_listed = album);
      break;
      case 'release_date:':
         this.getIncludeOrMoreThanParam(param, 'release_date').subscribe((album) => this.album_listed = album);
      break;
      case 'release_date-':
        this.getExcludedOrLessThanParam(param, 'release_date').subscribe((album) => this.album_listed = album);
      break;
      case 'number_of_songs<':
        this.getIncludeOrMoreThanParam(param, 'number_of_songs').subscribe((album) => this.album_listed = album);
      break;
      case 'number_of_songs>':
        this.getExcludedOrLessThanParam(param, 'number_of_songs').subscribe((album) => this.album_listed = album);
      break;
      case 'artist:':
         this.getIncludeOrMoreThanParam(param, 'artist').subscribe((album) => this.album_listed = album);
      break;
      case 'artist-':
        this.getExcludedOrLessThanParam(param, 'artist').subscribe((album) => this.album_listed = album);
      break;
    }
    return this.album_listed;
  }


}
