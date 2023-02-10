import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { ARTISTS } from 'src/app/mocks/artist.mock';
import { IArtist } from 'src/app/models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  //TO-DO: All the functionalities related to artist
  organizedList(artistList: Observable<IArtist[]>): Observable<IArtist[]> {
    return artistList.pipe(
      map(results => results.sort(
        (a, b) => (a.year_debut < b.year_debut) ? 1 : -1)))
  }

  getAll(): Observable<IArtist[]> {

    let obsArtist: Observable<IArtist[]> = new Observable(observer => {
      observer.next(ARTISTS);
      observer.complete();
    });

    return this.organizedList(obsArtist);
  }


  getByName(name: string): Observable<IArtist[]> {
    console.log(name);
    let obsArtist: Observable<IArtist[]> = this.getAll();
    //let obsArtist2: Observable<IArtist[]>;
    console.log(obsArtist.forEach(art => console.log(art)));
    if (name.startsWith(":")) {
      obsArtist = obsArtist.pipe(
        map((artists: IArtist[]) => artists.filter((artist: IArtist) => artist.name.toLowerCase().startsWith(name.substring(1).toLowerCase()))));
    } else if (name.startsWith("-")) {
      obsArtist = obsArtist.pipe(map((artist:IArtist[]) => artist.filter((artist: IArtist) => !artist.name.toLowerCase().startsWith(name.substring(1).toLowerCase()))));
    }
    return obsArtist;
  }

  /*getByCountry(){

  }*/

  /*getByDateDebut(){

  }*/
}
