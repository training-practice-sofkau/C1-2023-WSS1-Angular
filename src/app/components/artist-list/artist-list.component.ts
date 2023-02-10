import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
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

  param: string = "";
  choice: string = "";
  page: number = 0;




  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];
  results: number = 0;

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_artists = artist);
    this.results = this.l_artists.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(choice : string){
    console.log(this.param)
    console.log(this.choice)
    if (choice == 'nameInclude')this.service.getByNameInclude(this.param).subscribe((artist) => (this.l_artists = artist));
    if (choice == 'nameExclude')this.service.getByNameExclude(this.param).subscribe((artist) => (this.l_artists = artist));
    if (choice == 'ageGreat')this.service.getByAgeGreat(Number(this.param)).subscribe((artist) => (this.l_artists = artist));
    if (choice == 'ageLess')this.service.getByAgeLess(Number(this.param)).subscribe((artist) => (this.l_artists = artist));
    if (choice == 'countryInclude')this.service.getByCountryInclude(this.param).subscribe((artist) => (this.l_artists = artist));
    if (choice == 'countryExclude')this.service.getByCountryExclude(this.param).subscribe((artist) => (this.l_artists = artist));

    this.results = this.l_artists.length;

  }

}


