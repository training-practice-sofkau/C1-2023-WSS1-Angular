import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist-services/artist.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent  implements OnInit {
  saveArtist: FormGroup = new FormGroup({});
  input = new FormControl('', [Validators.required]);
  status: boolean = false;
  type: string = 'save';
  artistToUpdate = {};

  constructor(private builder: FormBuilder, private service: ArtistService, private cookie:CookieService){}

  ngOnInit():void{
    this.type = this.service.getType();
    console.log(this.type);
    if (this.type == 'update' || this.cookie.get('data')){
      this.service.changeType('update');
      this.type = this.service.getType();
      this.artistToUpdate = JSON.parse(this.cookie.get('data'))
      this.saveArtist = this.builder.group(this.artistToUpdate)
    } else if (this.type == 'save') {
      this.saveArtist = this.builder.group(
      {
        id: '',
        name:'',
        country:'',
        enterprise: '',
        debutDate: new Date(),
        type: ''
      }
    );}
  }

  onSubmit(){
    this.service.postArtist(this.saveArtist.value).subscribe((answer)=>console.log(answer));
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  onUpdate() {
    this.service.updateArtist(this.saveArtist.value);
  }

  deleteCookie(){
    this.cookie.deleteAll();
  }
}
