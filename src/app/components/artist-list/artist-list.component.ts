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

  results: number = 0;

  page: number = 1;
  
  ngOnInit(): void {
    this.service.getAll().subscribe((val) => {this.l_artists = val})
    this.results = this.l_artists.length;
  }

  ngOnSearch(){
      let re = /(?<name>\w+)+(\W)+(\w+)/;
      let filter = re.exec(this.param);

      let p = filter![1];
      let s = filter![2];
      let b = filter![3];


      this.service.getByParameter(p, s, b).subscribe((val) => {this.l_artists = val})
      
  }


}
