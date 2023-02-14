import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent  implements OnInit {
  saveArtist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistService){}

  ngOnInit():void{
    this.saveArtist = this.builder.group(
      {
        name:'',
        country:'',
        enterprise: '',
        debutDate: "2023-02-14",
        type: ''
      }
    );
    this.saveArtist.valueChanges.subscribe((change)=>console.log(change));

  }

  onSubmit(){
    this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
    window.alert("The user was created successfully.")
  }

}
