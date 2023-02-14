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

  ngOnSearch(){
    switch(this.filterOption){
      case "id": {
        console.log(this.filterParam);
        this.artistService.getById(this.filterParam).subscribe(
          artist => { this.results = [artist]}
        )
        break;
      };
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

  onDelete(artistID: string){
    let userConfirm: boolean = confirm("Are you sure you want to delete this artist?")
    if (userConfirm){
      this.artistService.deleteArtist(artistID);
    }
  };

  onUpdate(artist: IArtist){
    this.artistService.setArtist(artist);
  }
};
