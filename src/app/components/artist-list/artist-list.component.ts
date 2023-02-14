import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';


import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit{

  constructor(private service: ArtistService, private builder: FormBuilder, private dialog: MatDialog,) {}
  updateArtist: FormGroup = new FormGroup({});



  param: string = "";
  del: string = "";
  choice: string="";

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
    this.service.getAll().subscribe({
      next: (artist) => {
        this.l_artists = artist,
        this.results = this.l_artists.length;
      },
      error: (console.log),
      complete: (console.log)
    })

  }


  ngGetById(param: string){
    this.service.getById(param).subscribe((artist) => {
      this.l_artists = [artist],
      this.results = this.l_artists.length;});
  }


  ngDelete(del: string){

    if(confirm("Are you sure you want to delete this entry?")){
      this.service.deleteArtist(del).subscribe();
    }
  }

  // ngupdateArtist(artist: IArtist){
  //   this.updateArtist = this.builder.group(
  //     {
  //       id: artist.artistID,
  //       name: artist.name,
  //       country: artist.country,
  //       enterprise: artist.enterprise,
  //       debutDate: artist.debutDate,
  //       type: artist.type
  //     }
  //   );
  //   const dialogRef=this.dialog.open(updateDialog, {
  //     data: {name: artist.name, country: artist.country, enterprise: artist.enterprise, debutDate: artist.debutDate, type: artist.type}
  //   });
  //   dialogRef.afterClosed().subscribe(artist => {
  //     this.updateArtist = artist;
  //   })
  //   this.updateArtist.valueChanges.subscribe((change)=>console.log(change));
  // }

  onSubmit(){

    this.service.putArtist(this.updateArtist.value).subscribe((answer)=>console.log(answer));
  }


}










