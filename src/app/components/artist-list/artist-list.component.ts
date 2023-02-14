import {Component, OnInit, Input, Inject} from '@angular/core';

import {IArtist} from 'src/app/models/artist.interface';
import {ArtistService} from 'src/app/services/artist-services/artist.service';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {

  constructor(
    private service: ArtistService,
    private dialog: MatDialog,
  ) {
  }

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_artists: IArtist[] = [];

  artist_f: IArtist = {
    artistID: '',
    name: '',
    country: '',
    enterprise: '',
    debutDate: new Date(),
    type: ''

  };

  results: number = 0;

  ngOnInit(): void {
    this.getAll();
    /*this.service.getAll()
    .subscribe((artist) => {

      this.l_artists = artist,
      this.results = this.l_artists.length;});*/

  }

  getAll(){
    this.service.getAll().subscribe({
      next: (artist) => {
        this.l_artists = artist,
          this.results = this.l_artists.length;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  updateArtist(artist: IArtist) {
    this.dialog.open(ArtistListDialog,{
      data: artist
    });
    console.log(artist);
  }

  deleteArtist(id: string) {
    this.service.deleteArtist(id).subscribe({
      next: () => {
        console.log("Deleted successfully");
        this.getAll();
      },
      error: error => console.log(error),
      complete: (console.log)
    });
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngGetById(param: string) {
    this.service.getById(param).subscribe((artist) => {
      this.l_artists = [artist],
        this.results = this.l_artists.length;
    });
  }
}

@Component({
  selector: 'artist-list-dialog',
  templateUrl: 'artist-list-dialog.html',
})
export class ArtistListDialog implements OnInit{

  constructor(
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data: IArtist,
    private artistService: ArtistService,
    private router: Router,
    private dialog: MatDialog,
  ) {
  }
  updateArtist: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.updateArtist = this.builder.group(
      {
        artistID: this.data.artistID,
        name: this.data.name,
        country: this.data.country,
        enterprise: this.data.enterprise,
        debutDate: this.data.debutDate,
        type: this.data.type
      }
    );
  }

  updateTheArtist(){
    this.artistService.updateArtist(this.updateArtist.value).subscribe({
      next: value => {
        this.router.navigateByUrl("/home");
        this.dialog.closeAll();
      },
      error: error => console.log(error),
      complete: (console.log)
    });
  }
}

