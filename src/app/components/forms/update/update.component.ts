import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import { UpdateArtistComponent } from '../../modals/update-artist/update-artist.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ArtistUpdateComponent  implements OnInit {
  saveArtist: FormGroup = new FormGroup({});


  constructor(private builder: FormBuilder, private service: ArtistService, public dialogRef: MatDialogRef<UpdateArtistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){}

  ngOnInit():void{
    this.saveArtist = this.builder.group(
      {
        artistID:this.data.artist.artistID,
        name: this.data.artist.name,
        country:this.data.artist.country,
        enterprise: this.data.artist.enterprise,
        debutDate: this.data.artist.debutDate,
        type: this.data.artist.type
      }
    );
    this.saveArtist.valueChanges.subscribe((change)=>console.log(change));

  }

  onSubmit(){
    this.service.putArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
