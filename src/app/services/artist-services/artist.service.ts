import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  artist_listed: IArtist[] = [];

  //TO-DO: All the functionalities related to artist
  getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });
    return obsArtist;
  };

  getIncludeOrMoreThanParam(param: string, arg: string): Observable<IArtist[]>{
    let obsAlbums: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS.filter((atist) => {
        var type = typeof atist[arg as keyof IArtist]
         if ( type == 'string') {
         return atist[arg as keyof IArtist].toString().toLowerCase().startsWith(param.toLowerCase())
        }
         if (type == 'number') {
        return atist[arg as keyof IArtist] < param;
         }
         return false;
      }).sort((a, b) => (a[arg as keyof IArtist] > b[arg as keyof IArtist] ) ? 1 : -1));
  });
  return obsAlbums;
  };


getExcludedOrLessThanParam(param: string, arg: string): Observable<IArtist[]>{
  let obsAlbums: Observable<IArtist[]> = new Observable(observer => {
    observer.next(ARTISTS.filter((atist) => {
      var type = typeof atist[arg as keyof IArtist]
       if ( type == 'string') {
       return !atist[arg as keyof IArtist].toString().toLowerCase().includes(param.toLowerCase())
      }
       if (type == 'number') {
      return atist[arg as keyof IArtist] > param;
       }
       return true;
    }).sort((a, b) => (a[arg as keyof IArtist] > b[arg as keyof IArtist] ) ? 1 : -1));
  });
  return obsAlbums;
  };


  filterParameterType(option: string, param: string): IArtist[]{
    switch (option) {
      case 'name:':
         this.getIncludeOrMoreThanParam(param, 'name').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'name-':
        this.getExcludedOrLessThanParam(param, 'name').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'country:':
         this.getIncludeOrMoreThanParam(param, 'country').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'country-':
        this.getExcludedOrLessThanParam(param, 'country').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'age<':
         this.getIncludeOrMoreThanParam(param, 'age').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'age>':
        this.getExcludedOrLessThanParam(param, 'age').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'year_debut<':
        this.getIncludeOrMoreThanParam(param, 'year_debut').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'year_debut>':
        this.getExcludedOrLessThanParam(param, 'year_debut').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'total_albums<':
         this.getIncludeOrMoreThanParam(param, 'total_albums').subscribe((artist) => this.artist_listed = artist);
      break;
      case 'total_albums>':
        this.getExcludedOrLessThanParam(param, 'total_albums').subscribe((artist) => this.artist_listed = artist);
      break;
    }
    return this.artist_listed;
  }
}

