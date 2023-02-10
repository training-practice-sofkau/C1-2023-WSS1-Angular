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
  l_artists_filtered: IArtist[] = [];

  results: number = 0;

  //Variables for pagination
  defaultPerPage = 2;
  pageEvent: any;

  constructor(private artistService: ArtistService) {
  }

  ngOnInit(): void {
    this.l_artists = ARTISTS;
    this.l_artists_filtered = this.l_artists.slice(0, this.defaultPerPage);
    this.results = this.l_artists.length;
  }


  searchObs(param: string, typeSearch: string) {
    this.artistService.search(typeSearch, ARTISTS, param)
      .subscribe(observer => {
        this.l_artists = observer;
      }).unsubscribe();
    this.l_artists_filtered = this.l_artists.slice(0, this.defaultPerPage);
    this.results = this.l_artists.length;
  }

  //New pagination method
  onPaginateChange(data : any) {
    this.l_artists_filtered = this.l_artists.slice(data.pageIndex * this.defaultPerPage, (data.pageIndex + 1) * this.defaultPerPage);
  }


}
