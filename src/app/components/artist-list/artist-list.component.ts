import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {

  

  @Input() param: string = "";
  @Input() typeSearch: string = "";
  

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  results: number = 0;

  p: number = 0;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getAll().subscribe((artist: IArtist[]) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }
  

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string) {
    if(param=="" || typeSearch ==="Select an option") this.ngOnInit();
    switch (typeSearch) {
      case "name":
        this.artistService.getByName(param).subscribe(((artist: IArtist[]) => this.l_artists = artist));
        console.log(this.l_artists);
        this.results = this.l_artists.length;
        break;
      case "country":
        this.artistService.getByCountry(param).subscribe(((artist: IArtist[]) => this.l_artists = artist));
        this.results = this.l_artists.length;
        break;
      case "age":
        this.artistService.getByAge(param).subscribe((artist: IArtist[]) => this.l_artists = artist);
        this.results = this.l_artists.length;
        break;
    }

  }

}
