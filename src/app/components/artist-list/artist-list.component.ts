import { Component, OnInit, Input } from '@angular/core';
import { ARTISTS } from 'src/app/mocks/artist.mock';
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

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  results: number = 0;
  p: number = 1;
  count: number = 3;

  selected_option = '';

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

  ngSearchByParam(event: Event) {
    const element = event.target as HTMLInputElement;
    this.l_artists = this.service.filterParameterType(this.selected_option, element.value)
    this.results = this.l_artists.length;
    this.p = 1;
  }

  ngInputReset(){
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

}
