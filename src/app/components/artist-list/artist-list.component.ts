import { Component, OnInit, Input } from '@angular/core';

import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import { ArtistFormComponent } from '../forms/artist-form/artist-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {

  constructor(private service: ArtistService, 
    //private artistForm: ArtistFormComponent, 
    private router: Router
    ) { }

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  artist_f: IArtist = {
    artistIDDTO: '',
    nameDTO: '',
    countryDTO: '',
    enterpriseDTO: '',
    debutDateDTO: new Date(0),
    typeDTO: ''

  };

  p: number = 0;
  results: number = 0;

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (artist) => {
        this.l_artists = artist;
        this.results = this.l_artists.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngGetById(param: string) {
    this.service.getById(param).subscribe((artist) => {
      this.l_artists = [artist];
      this.results = this.l_artists.length;
    });
  }

  ngLoadUpdate(artist: IArtist){
   this.artist_f = artist;
   console.log(this.artist_f);
   //let id = artist.artistIDDTO;
   this.router.navigate([`/new/artist/${this.artist_f.artistIDDTO}`]);
  }

  ngDeleteById(artistID: string, artistName: string) {
    if (confirm(`do you really like delete ${artistName} from the list?`)) {
      this.service.deleteArtist(artistID).subscribe();
      alert(`${artistName} was deleted successfully`);
      this.ngOnInit();
    } else {
      this.ngOnInit();
    }
  }


}
