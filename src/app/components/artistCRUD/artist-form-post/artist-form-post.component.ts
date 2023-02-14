import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';


@Component({
  selector: 'app-artist-form-post',
  templateUrl: './artist-form-post.component.html',
  styleUrls: ['./artist-form-post.component.scss']
})
export class ArtistFormPostComponent implements OnInit{


  artist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistHttpService){}

  ngOnInit():void{
    this.artist = this.builder.group(
      {
        name: "",
        country:"",
        enterprise: "",
        debutDate: "",
        type: "",
        age: "",
      }
    );
    this.artist.valueChanges.subscribe((change)=>console.log(change));
  }

  onSubmit(){
    this.service.post(this.artist.value).subscribe((answer)=>{
      console.log(answer)
      alert(`User with ID: ${answer.data.artistID} has been created!`)
    });
  }
}
