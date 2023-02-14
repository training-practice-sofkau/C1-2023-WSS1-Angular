import { Component, OnInit, Input } from '@angular/core';

import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  constructor(private artistService: ArtistService) {}

  filterOption: string = "";
  @Input() filterParam: string = "";

  artistList: IArtist[] = [];
  results: IArtist[] = []
  img = "https://www.shutterstock.com/image-vector/letter-b-pulse-music-player-260nw-1581685942.jpg";

  ngOnInit(): void {
    this.artistService.getAll().subscribe({
      next: (artists) => {
        this.artistList = artists,
        this.results = artists;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngGetById(param: string){
    this.artistService.getById(param).subscribe((artist) => {
      this.results = [artist]});
  }

  ngOnSearch(){
    switch(this.filterOption){
      case "name": {
        this.artistService.getByName(this.filterParam, this.artistList).subscribe(
          artists => { this.results = artists; }
        );
        break;
      };
      case "country": {
        this.artistService.getByCountry(this.filterParam, this.artistList).subscribe(
          artists => { this.results = artists;}
        );
        break;
      };
    };
  };
};
