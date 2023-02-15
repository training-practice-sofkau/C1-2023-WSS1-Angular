import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAlbum } from 'src/app/models/album.interface';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-edit-album-form',
  templateUrl: './edit-album-form.component.html',
  styleUrls: ['./edit-album-form.component.scss']
})
export class EditAlbumFormComponent {

  @Input() objEdit:IAlbum | undefined = undefined 
  @Output() toEdit = new EventEmitter<IAlbum>();
  editAlbum: FormGroup = new FormGroup({});
  artistAvailable:IArtist[] = []

  constructor(private builder: FormBuilder,
    private artService:ArtistService
    ){}



  ngOnInit():void{
    this.editAlbum = this.builder.group(
      {
        albumID:this.objEdit?.albumID,
        title:[
        {
          value: this.objEdit?.title,
          disabled: false
        },
        Validators.required,
      ],
        totalSongs:this.objEdit?.totalSongs,
        yearRelease: this.objEdit?.yearRelease,
        genre: this.objEdit?.genre,
        artistDTO: this.objEdit?.artistDTO
      }
    );

    this.artService.getAll().subscribe({
      next: (artist) => (this.artistAvailable = artist),
      error: console.log,
      complete: console.log,
    });
    //this.editAlbum.valueChanges.subscribe((change)=>console.log(change));

  }

  submitInfo(){
    this.toEdit.emit(this.editAlbum.getRawValue())
  }

}
