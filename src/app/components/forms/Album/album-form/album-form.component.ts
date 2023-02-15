import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IArtist } from 'src/app/models/artist.interface';
import { AlbumService } from 'src/app/services/album-services/album.service';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent {

  saveAlbum: FormGroup = new FormGroup({});
  artistAvailable:IArtist[] = []

  constructor(private builder: FormBuilder, private service: AlbumService,
    private artService:ArtistService,
    public dialogRef: MatDialogRef<AlbumFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}



  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit():void{
    this.saveAlbum = this.builder.group(
      {
        albumID:'',
        title:[
        {
          value: '',
          disabled: false
        },
        Validators.required,
      ],
        totalSongs:'',
        yearRelease: '',
        genre: '',
        artistDTO: ''
      }
    );

    this.artService.getAll().subscribe({
      next: (artist) => (this.artistAvailable = artist),
      error: console.log,
      complete: console.log,
    });
    //this.saveArtist.valueChanges.subscribe((change)=>console.log(change));

  }

}
