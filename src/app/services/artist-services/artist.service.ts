import { Interpolation } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  //TO-DO: All the functionalities related to artist
  getAll(): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });
    return obsArtist;
  }

  getByName(filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer =>{
      observer.next(artistList.filter(artist => artist.name.startsWith(filterParam)));
      observer.complete();
    });
    return obsArtist;
  }

  getByGenre (filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(artistList.filter(artist => artist.genre.startsWith(filterParam)));
      observer.complete();
    });

    return obsArtist;
  }

  getByAlbums (filterParam: string, artistList: IArtist[]): Observable<IArtist[]> {
    if (filterParam){
      if (parseInt(filterParam)){
        let obsArtist: Observable<IArtist[]> = new Observable(observer => {
          observer.next(artistList.filter(artist => artist.albums >= parseInt(filterParam))
            .sort((a, b) => (a.albums > b.albums) ? -1 : 1));
          observer.complete()
        });
        return obsArtist;
      };
    };
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(artistList.sort((a, b) => (a.albums > b.albums) ? -1 : 1));
      observer.complete();
    });
    return obsArtist;
  };
}
