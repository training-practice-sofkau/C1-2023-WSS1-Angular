import {Component, OnInit, Input} from '@angular/core';
import {ARTISTS} from 'src/app/mocks/artist.mock';
import {IArtist} from 'src/app/models/artist.interface';
import {ArtistService} from "../../services/artist-services/artist.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {

  @Input() param: string = "";

  l_artists: IArtist[] = [];

  results: number = 0;

  pagFrom: number = 0;
  pagTo: number = 3;

  constructor(private artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.results = this.l_artists.length;
  }


  searchObs(param: string, typeSearch: string) {
    this.artistService.search(typeSearch, ARTISTS, param)
      .subscribe(observer => {
        this.l_artists = observer;
      }).unsubscribe();
    this.results = this.l_artists.length;
    this.pagFrom = 0;
    this.pagTo = 3;
  }

  changePage(change: boolean) {
    if (change) {
      if (!(this.pagTo >= this.results - 1)) {
        this.pagFrom += 4;
        this.pagTo += 4;
      }
    } else if (!change) {
      if (!(this.pagFrom <= 0)) {
        this.pagFrom -= 4;
        this.pagTo -= 4;
      }
    }

  }


}
