import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARTISTS } from '../mocks/artist.mock';
import { IArtist } from '../models/artist.interface';
import { ArtistHttpService } from './artist-http.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {




  toLowerCase = (data:string): string => {
    return data.toLowerCase();
  }


  /* getAll(): Observable<IArtist[]> {
    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });
    return obsArtist;
  } */

  getByName(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
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

  getByNotName(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => !this.toLowerCase(artist.name).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByLessName(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => {
            if (this.toLowerCase(artist.name).localeCompare(this.toLowerCase(param))==-1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByMoreName(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => {
            if (this.toLowerCase(artist.name).localeCompare(this.toLowerCase(param))==1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }


  getByCountry(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
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

  getByNotCountry(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => !this.toLowerCase(artist.country).startsWith(this.toLowerCase(param))
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByLessCountry(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => {
            if (this.toLowerCase(artist.country).localeCompare(this.toLowerCase(param))==-1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByMoreCountry(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => {
            if (this.toLowerCase(artist.country).localeCompare(this.toLowerCase(param))==1){
              return true
            } return false})
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }


  getByAge(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
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

  getByNotAge(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => artist.age !== parseInt(param)
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByLessAge(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => artist.age < parseInt(param)
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

  getByMoreAge(param: string, ARTISTS: IArtist[]): Observable<IArtist[]>{
    let obsArtists: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS
        .filter(
          artist => artist.age > parseInt(param)
          )
        .sort((a, b) => (a.name < b.name ? -1 : 1)));
      observer.complete();
    })
    return obsArtists;
  }

}
