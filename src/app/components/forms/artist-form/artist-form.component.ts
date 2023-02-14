import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import { NewArtistComponent } from '../../modals/new-artist/new-artist.component';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent  implements OnInit {

  saveArtist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistService,
    public dialogRef: MatDialogRef<ArtistFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){}



  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit():void{
    this.saveArtist = this.builder.group(
      {
        artistID:'',
        name:[
        {
          value: '',
          disabled: false
        },
        Validators.required,
      ],
        country:'',
        enterprise: '',
        debutDate: new Date(),
        type: ''
      }
    );
    //this.saveArtist.valueChanges.subscribe((change)=>console.log(change));

  }
  

}
