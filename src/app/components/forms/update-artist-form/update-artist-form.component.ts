import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-update-artist-form',
  templateUrl: './update-artist-form.component.html',
  styleUrls: ['./update-artist-form.component.scss']
})
export class UpdateArtistFormComponent {
    updateArtist: FormGroup = new FormGroup({});

    constructor(private builder: FormBuilder, private router:ActivatedRoute, private artist: ArtistService){}

    ngOnInit():void{
        this.updateArtist = this.builder.group(
            {
                name:'',
                country:'',
                enterprise: '',
                debutDate: new Date(),
                type: ''
            }
        );

    this.artist.getCurretArtist(this.router.snapshot.params['id'])
    .subscribe((res) => this.editArtist(res));

    }

    editArtist(artist: any ){
        this.updateArtist.patchValue({
            name: artist.name,
            country: artist.country,
            enterprise: artist.enterprise,
            debutDate: artist.debutDate,
            type: artist.type
        })

    }

    collection(){
        console.warn(this.updateArtist.value)
        this.artist.updateArtist(this.router.snapshot.params['id'], this.updateArtist.value)
        .subscribe((res) => console.warn(res))
    }


}
