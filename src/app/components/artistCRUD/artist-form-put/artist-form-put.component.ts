import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';


@Component({
  selector: 'app-artist-form-put',
  templateUrl: './artist-form-put.component.html',
  styleUrls: ['./artist-form-put.component.scss']
})
export class ArtistFormPutComponent implements OnInit {

  @Input() artistSelected: IArtist = {
    artistID: "",
    name: "",
    country: "",
    age:0,
    enterprise: "",
    debutDate:new Date(),
    type: "",
  };

/*   name: string= this.artistSelected.name;
  country: string= this.artistSelected.country;
  enterprise: string= this.artistSelected.enterprise;
  debutDate: Date=this.artistSelected.debutDate;
  type: string= this.artistSelected.type;
 */
  artist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistHttpService){}

  ngOnInit():void{
    this.artist = this.builder.group(
      {
        name: this.artistSelected.name,
        country:this.artistSelected.country,
        enterprise: this.artistSelected.enterprise,
        debutDate: this.artistSelected.debutDate,
        type: this.artistSelected.type,
        age: this.artistSelected.age,
      }
    );
    this.artist.valueChanges.subscribe((change)=>console.log(change));
  }


  onSubmit(){

    //this.name= "hola"
    console.log(this.artistSelected.name)
    this.service.update(this.artistSelected.artistID,this.artist.value).subscribe((answer)=>{
      console.log(answer)
      alert(`User with ID: ${answer.data.artistID} has been updated!`)
    })
    //this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
  }
}
