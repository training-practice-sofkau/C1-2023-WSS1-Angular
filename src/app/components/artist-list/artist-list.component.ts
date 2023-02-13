import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

    constructor(private service: ArtistService){}

  @Input() param: string = "";

  l_artists: IArtist[] = [];

  artist_f: IArtist = {
    artistID: '',
    name: '',
    country: '',
    enterprise: '',
    debutDate: new Date(),
    type: '',
    img: {url: 'https://imagoimpresiones.com/wp-content/uploads/woocommerce-placeholder.png'} 
  };


  results: number = 0;

  page: number = 1;
  

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (artist) => {
        this.l_artists = artist,
        this.results = this.l_artists.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }


  ngGetById(param: string){
      if(!param){
          this.service.getAll().subscribe({
              next: (artist) => {
                  this.l_artists = artist,
                      this.results = this.l_artists.length;
              },
              error: (console.log),
              complete: (console.log)
          })
      }

      this.service.getById(param).subscribe((artist) => {
          this.l_artists = [artist],
              this.results = this.l_artists.length;});
      console.log(this.l_artists)
  }


}
