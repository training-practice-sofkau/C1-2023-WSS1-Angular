import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlbumHttpService } from 'src/app/services/album-http.service';


@Component({
  selector: 'app-album-form-post',
  templateUrl: './album-form-post.component.html',
  styleUrls: ['./album-form-post.component.scss']
})
export class AlbumFormPostComponent {

  album: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: AlbumHttpService){}


  ngOnInit():void{
    this.album = this.builder.group(
      {
        name: "",
        totalSongs:"",
        yearRelease: "",
        genre: "",
      }
    );
    this.album.valueChanges.subscribe((change)=>console.log(change));
  }

  onSubmit(){
    this.service.post(this.album.value).subscribe((answer)=>{
      console.log(answer)
      alert(`Album with ID: ${answer.data.albumID} has been created!`)
    });
  }
}
