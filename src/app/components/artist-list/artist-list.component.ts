import { group } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

    constructor(private service: ArtistService){}

  @Input() param: string = "";

  l_artists: IArtist[] = [];
  f_artists: IArtist[] = [];

  results: number = 0;

  page: number = 1;
  
  ngOnInit(): void {
    this.service.getAll().subscribe((val) => {this.f_artists = val})
    this.service.getAll().subscribe((val) => {this.l_artists = val})
    this.results = this.l_artists.length;
  }

  ngOnSearch(){
      let re = /(?<name>\w+)+(\W)+(\w+)/;
      let filter = re.exec(this.param);

      let p = filter![1];
      let s = filter![2];
      let b = filter![3];

      console.log(p);
      console.log(s);
      console.log(b);

      this.service.getByParameter(p, s, b).subscribe((val) => {this.f_artists = val})
      

    // if (this.filter === "name") {
    //     this.f_artists = this.l_artists.filter((obj) => obj.name.toLowerCase().startsWith(this.param.toLowerCase()));
    // } else if(this.filter === "country") {
    //     this.f_artists = this.l_artists.filter((obj) => obj.country.toLowerCase().startsWith(this.param.toLowerCase()));
    // } else if(this.filter === "age") {
    //     this.f_artists = this.l_artists.filter((obj) => obj.age.toString().toLowerCase().startsWith(this.param.toLowerCase()));
    // }
    

    // this.results = this.f_artists.length
  }


}
