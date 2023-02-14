import { Component, OnInit } from '@angular/core';
import { IArtist } from '../../models/artist.interface';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
})
export class ArtistListComponent implements OnInit {
  constructor(private artistService: ArtistService) {}

  artists: IArtist[] = [];
  searchResulst: IArtist[] = [];
  searchParam: string = '';
  searchBy: number = 0;
  searchOperator: number = 1;
  results: number = 0;

  ngOnInit(): void {
    this.onFindAll();
  }


  deleteA(id: string) {
    if (
      confirm(
        'Are you sure you want to delete ' +
          this.artists.find((artist) => artist.artistID === id)?.name
      )
    ) {
        this.artistService.deleteRegister(id).subscribe({
        next: () => {
          alert('artist succesfully deleted ');
          this.onFindAll();
        },
        error: console.log,
        complete: console.log,
      });
    } else {
      alert("artist won't be deleter");
    } // this.onDelete.emit();
  }

  onFilter(id: string) {
    this.artistService.findById(id).subscribe({
      next: (artists) => {
        this.artists = [artists];
        this.searchResulst = this.artists;
        this.results = this.searchResulst.length;
      },
      error: console.log,
      complete: console.log,
    });
  }
  onFindAll() {
    this.artistService.getAll().subscribe({
      next: (artists) => {
        this.artists = artists;
        this.searchResulst = this.artists;
        this.results = this.searchResulst.length;
      },
      error: console.log,
      complete: console.log,
    });
  }
}
