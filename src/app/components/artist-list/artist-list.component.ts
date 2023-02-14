import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  constructor(private service: ArtistService, private cookie:CookieService) {}

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];


  artist_f: IArtist = {
    artistID: '',
    name: '',
    country: '',
    enterprise: '',
    debutDate: new Date(),
    type: ''

  };

  results: number = 0;

  @Output() updateArtist = new EventEmitter<IArtist>();

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (artist) => {
        this.l_artists = artist,
        this.results = this.l_artists.length;
      },
      error: (console.log),
      complete: (console.log)
    })
    /*this.service.getAll()
    .subscribe((artist) => {

      this.l_artists = artist,
      this.results = this.l_artists.length;});*/

  }

  //TO-DO: Create a function that based of param it will show n-results
  ngGetById(param: string){
    this.service.getById(param).subscribe((artist) => {
      if (typeof artist == 'object') {
      this.l_artists = [artist];
      this.results = this.l_artists.length;
      } else {
        this.l_artists = [];
        this.results = 0;
      }
    })
  };

  ngDeleteById(param: string){
    console.log(param);
    this.service.deleteById(param).subscribe((artist) => {
      if (typeof artist == 'object') {
        alert("El artista: " + artist.name + " con id: " + artist.artistID + " ha sido eliminado exitosamente")
        this.ngOnInit();
      } else {
        alert("El artista con id: "+ param + " no fue encontrado")
      }
    })
  };

  setType(param: string){
    this.service.changeType(param);
  }

  setUpdateArtistCookie(artist: IArtist, param: string){
    this.cookie.set("data", JSON.stringify(artist));
    this.service.changeType(param);
  }


}
