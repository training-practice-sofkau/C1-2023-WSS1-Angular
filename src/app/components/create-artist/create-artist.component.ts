import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtistService } from '../../services/artist-service/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent {

  formAdd = new FormGroup({
    name: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    age: new FormControl(0, Validators.required),
    yearDebut: new FormControl(0, Validators.required),
    totalAlbums: new FormControl(0, Validators.required)
  })


  constructor(
    private artistService: ArtistService,
    private router: Router,
    ){}


  ngAddArtist(){
    this.artistService.addArtist(this.formAdd.value).subscribe({
      next: (data) =>{},
      error: (err) => console.error("Error on posting data:" + err),
      complete: () => {}
    });
    this.router.navigate(['/artist']);
  }
}
