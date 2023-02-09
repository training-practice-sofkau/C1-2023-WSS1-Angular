import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTISTS } from '../mocks/artist.mock';
import { IArtist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }

  getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });
    return obsArtist;
  }

  getByName(param: string): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => this.toLowerCase(artist.name).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByCountry(param: string): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => this.toLowerCase(artist.country).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByAge(param: string): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => artist.age === parseInt(param)
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

}
