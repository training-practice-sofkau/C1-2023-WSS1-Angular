import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumHttpService } from 'src/app/services/album-http.service';


@Component({
  selector: 'app-album-form-put',
  templateUrl: './album-form-put.component.html',
  styleUrls: ['./album-form-put.component.scss']
})
export class AlbumFormPutComponent {

  @Input() albumSelected: IAlbum = {
    albumID: "",
    name: "",
    genre: "",
    yearRelease:"",
    totalSongs: 0,
  };

  album: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: AlbumHttpService){}

  ngOnInit():void{
    this.album = this.builder.group(
      {
        name: this.albumSelected.name,
        genre:this.albumSelected.genre,
        yearRelease: this.albumSelected.yearRelease,
        totalSongs: this.albumSelected.totalSongs,
      }
    );
    this.album.valueChanges.subscribe((change)=>console.log(change));
  }


  onSubmit(){

    //this.name= "hola"
    console.log(this.albumSelected.name)
    this.service.update(this.albumSelected.albumID,this.album.value).subscribe((answer)=>{
      console.log(answer)
      alert(`Album with ID: ${answer.data.albumID} has been updated!`)
    })
    //this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
  }


}
