import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist-services/artist.service';


@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent {
    saveArtist: FormGroup = new FormGroup({});

    constructor(private builder: FormBuilder, private service: ArtistService){}

    ngOnInit():void{
        this.saveArtist = this.builder.group(
            {
                name:'',
                country:'',
                enterprise: '',
                debutDate: new Date(),
                type: ''
            }
        );
        this.saveArtist.valueChanges.subscribe();

    }

    onSubmit(){
        this.service.postArtist(this.saveArtist.value).subscribe(()=> {
            alert("Artist created");
        });
        
    }

}
