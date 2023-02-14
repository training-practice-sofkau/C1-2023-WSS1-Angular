import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit{

  @Input() artistSelected: IArtist|undefined;
  name: string= "";
  country: string= "";
  enterprise: string= "";
  debutDate: Date=new Date();
  type: string= "";

  artist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistHttpService){}

  ngOnInit():void{
    this.artist = this.builder.group(
      {
        name: this.name,
        country:this.country,
        enterprise: this.enterprise,
        debutDate: this.debutDate,
        type: this.type
      }
    );
    this.artist.valueChanges.subscribe((change)=>console.log(change));
  }


  onSubmit(){

    this.name= "hola"
    console.log(this.name)
    //this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
  }

}
