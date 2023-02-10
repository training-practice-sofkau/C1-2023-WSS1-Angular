import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  constructor(private service: ArtistService) {}

  @Input() param: string = "";
  p: number=0;

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  results: number = 0;
  
  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string){
    console.log(typeSearch);
    if(typeSearch==="name"){
      this.service.getByName(param).subscribe(((artist) => this.l_artists=artist));
      console.log(this.l_artists);
      this.results = this.l_artists.length;
    }
  }

}
