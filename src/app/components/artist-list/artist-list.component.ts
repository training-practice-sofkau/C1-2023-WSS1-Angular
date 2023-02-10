import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  constructor(
    private artistService: ArtistService
  ){};

  filterOption: string = "";
  @Input() filterParam: string = "";

  artistList: IArtist[] = [];

  results: IArtist[] = []

  ngOnInit(): void {
    this.artistService.getAll().subscribe(artists => {
      this.artistList = artists;
      this.results = artists;
    })
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(){
    switch(this.filterOption){
      case "name": {
        this.artistService.getByName(this.filterParam, this.artistList).subscribe(
          artists => { this.results = artists; }
        );
        break;
      };
      case "genre": {
        this.artistService.getByGenre(this.filterParam, this.artistList).subscribe(
          artists => { this.results = artists;}
        );
        break;
      };
      case "albums": {
        this.artistService.getByAlbums(this.filterParam, this.artistList).subscribe(
          artists => { this.results = artists}
        );
        break;
      };
    };
  };
}
