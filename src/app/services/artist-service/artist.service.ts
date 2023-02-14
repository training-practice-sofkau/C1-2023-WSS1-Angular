import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IArtist } from 'src/app/models/artist.interface';
import { ARTISTS } from '../../mocks/artist.mock';


@Injectable({
  providedIn: 'root',
})
export class ArtistService {

  url: string = "http://localhost:8080/charts/artists/";

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  addArtist(form: any ){
    return this.httpClient.post(this.url, form);
  }

  getById(id: string) {
    return this.httpClient.get(`${this.url}${id}`);
  }

  updateArtist(id: string, form: any) {
    return this.httpClient.put(`${this.url}${id}`, form);
  }

  filterByName(searchingText: string, artists: IArtist[]): Observable<IArtist[]> {
    return new Observable((observer) => {
      observer.next(
        artists.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          artist.name.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByCountry(searchingText: string, artists: IArtist[]): Observable<IArtist[]> {
    return new Observable((observer) => {
      observer.next(
        artists.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          artist.country.toLowerCase().startsWith(searchingText.toLowerCase())
        )
      );
      observer.complete();
    });
  }

  filterByAge(searchingText: string, artists: IArtist[]): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(artists.sort((a, b) => b.age - a.age))
        : observer.next(
            artists.sort((a, b) => b.age - a.age).filter(
              (artist) => artist.age === parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterMaximumAge(searchingText: string, artists: IArtist[]): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(ARTISTS.sort((a, b) => b.age - a.age))
        : observer.next(
            artists.sort((a, b) => b.age - a.age).filter(
              (artist) => artist.age <= parseInt(searchingText)
            )
          );
      observer.complete();
    });
  }

  filterNoName(searchingText: string, artists: IArtist[]): Observable<IArtist[]> {
    return new Observable((observer) => {
      searchingText === ''
        ? observer.next(artists.sort((a, b) => a.name.localeCompare(b.name)))
        : observer.next(
        artists.sort((a, b) => a.name.localeCompare(b.name)).filter((artist) =>
          !artist.name.toLowerCase().startsWith(searchingText.toLowerCase())!
        )
      );
      observer.complete();
    });
  }
}
