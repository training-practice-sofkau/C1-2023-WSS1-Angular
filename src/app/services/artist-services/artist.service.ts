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

  /*getByName(){

  }*/

  /*getByCountry(){

  }*/

  /*getByDateDebut(){

  }*/
}
