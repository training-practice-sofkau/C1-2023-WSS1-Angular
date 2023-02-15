import { Component, OnInit, Input, Output } from '@angular/core';

import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  constructor(private service: ArtistService) {}

  myParam: string = '';

  editArtist :IArtist | undefined = undefined;

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];
  pagination_artist: IArtist[] = [];

  results: number = 0;

  currentPage: number = 1;

  rows: number = 3;

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (artist) => {
        (this.l_artists = artist),
          (this.pagination_artist = this.paginationList());
        this.results = this.l_artists.length;
      },
      error: console.log,
      complete: console.log,
    });
  }

  //TO-DO: Create a function that based of param it will show n-results
  onSearch() {
    if(this.myParam.length<4){
      this.editArtist=undefined
      this.service.getAll().subscribe({
        next: (artist) => {
          (this.l_artists = artist),
            (this.pagination_artist = this.paginationList());
          this.results = this.l_artists.length;
        },
        error: console.log,
        complete: console.log,
      });
    }else{

      this.service.getArtistById(this.myParam).subscribe(({
        next: (res => this.editArtist=res),
        error: console.log,
        complete: console.log
      }))
    }
  }

  paginationList(): IArtist[] {
    let start = this.rows * (this.currentPage - 1);
    let end = start + this.rows;
    return this.l_artists.slice(start, end);
  }

  changePage(move: string) {
    if (move == 'up') {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    this.pagination_artist = this.paginationList();
  }

  deleteArtist(id:string){
    this.service.deleteArtist(id).subscribe(({
      next: (res) => {
        alert(res)
      },
      error: console.log,
      complete: console.log,
    }))  
  }

  saveNewArtist(artist:any){
    this.service.addArtist(artist).subscribe(({
      next: (res=> {alert("Artist saved")
      this.service.getAll().subscribe({
        next: (artist) => {
          (this.l_artists = artist),
            (this.pagination_artist = this.paginationList());
          this.results = this.l_artists.length;
        },
        error: console.log,
        complete: console.log,
      });
    }),
      error: console.log,
      complete: console.log,
    }))
  }

  updateArtist(art:IArtist){
    this.service.editArtist(art).subscribe(({
      next: (res=> alert("Updated")),
      error: console.log,
      complete: console.log,
    }))
  }
}
