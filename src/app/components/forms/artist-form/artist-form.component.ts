import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent  implements OnInit {
  saveArtist: FormGroup = new FormGroup({});
  artistFromUpdate = false;
  artistIDFromUpdate = "";
  artist: IArtist = {
    artistID: "",
    name: "",
    country: "",
    debutDate: "2023-02-14",
    enterprise: "",
    type: "",
    albums: [],
  };

  constructor(private builder: FormBuilder, private service: ArtistService){}

  ngOnInit():void{

    this.service.selectedArtist$.subscribe(artist => {
      if (artist.artistID == undefined){
        this.saveArtist = this.builder.group(
          {
            name: this.artist.name,
            country: this.artist.country,
            enterprise: this.artist.country,
            debutDate: this.artist.debutDate,
            type: this.artist.type
          });
      }
      else {
        this.saveArtist = this.builder.group(
          {
            name: artist.name,
            country: artist.country,
            enterprise: artist.country,
            debutDate: artist.debutDate,
            type: artist.type
          });

          this.artistIDFromUpdate = artist.artistID;
          this.artistFromUpdate = true;
      }
    })
  }

  onSubmit(){
    this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
    window.alert("The user was created successfully.")
  }
  onUpdate(){
    this.service.updateArtist(this.artistIDFromUpdate, this.saveArtist.value).subscribe((answer)=>console.log(answer));
    window.alert("The user was updated successfully.")
  }
}
