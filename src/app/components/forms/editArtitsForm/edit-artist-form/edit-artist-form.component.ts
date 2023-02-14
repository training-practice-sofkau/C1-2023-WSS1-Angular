import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-edit-artist-form',
  templateUrl: './edit-artist-form.component.html',
  styleUrls: ['./edit-artist-form.component.scss']
})
export class EditArtistFormComponent {

  @Input() objEdit:IArtist | undefined = undefined 
  @Output() toEdit = new EventEmitter<IArtist>();
  editArtist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder
    ){}



  ngOnInit():void{
    this.editArtist = this.builder.group(
      {
        artistID:this.objEdit?.artistID,
        name:[
        {
          value: this.objEdit?.name,
          disabled: false
        },
        Validators.required,
      ],
        country:this.objEdit?.country,
        enterprise: this.objEdit?.enterprise,
        debutDate: this.objEdit?.debutDate,
        type: this.objEdit?.type
      }
    );
    //this.editArtist.valueChanges.subscribe((change)=>console.log(change));

  }

  submitInfo(){
    this.toEdit.emit(this.editArtist.getRawValue())
  }
  

}
