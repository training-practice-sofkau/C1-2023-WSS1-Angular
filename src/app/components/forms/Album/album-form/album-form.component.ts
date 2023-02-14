import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlbumService } from 'src/app/services/album-services/album.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.scss']
})
export class AlbumFormComponent {

  saveAlbum: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: AlbumService,
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
        totalSong:'',
        yearRelease: '',
        genre: new Date(),
        artistDTO: ''
      }
    );
    //this.saveArtist.valueChanges.subscribe((change)=>console.log(change));

  }

}
