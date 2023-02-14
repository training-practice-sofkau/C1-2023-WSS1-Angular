import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist-service/artist.service';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.scss']
})
export class EditArtistComponent implements OnInit {
  artistId: string = "";
  formEdit = new FormGroup({
    name: new FormControl(""),
    country: new FormControl(""),
    age: new FormControl(0),
    yearDebut: new FormControl(0),
    totalAlbums: new FormControl(0)
  });

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params["id"];
    this.artistService.getById(this.artistId).subscribe({
      next: (artist) => {
        this.formEdit.patchValue(artist);
        console.log(artist);
        },
      error: (err) => console.error("Error on getting artist by id: " + err),
      complete: () => {}
    })
  }

  ngEditArtist(){
    this.artistService.updateArtist(this.artistId, this.formEdit.value).subscribe({
      next: (data) => {},
      error: (err) => console.error("Error updating artist: " + err),
      complete: () => {}
    })
    this.routes.navigate(["artist"])
  }
}
