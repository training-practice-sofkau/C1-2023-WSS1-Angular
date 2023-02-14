import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ArtistService} from 'src/app/services/artist-services/artist.service';
import {Router} from "@angular/router";
import {ArtistListComponent} from "../../artist-list/artist-list.component";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {
  saveArtist: FormGroup = new FormGroup({});

  constructor(
    private builder: FormBuilder,
    private service: ArtistService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.saveArtist = this.builder.group(
      {
        name: '',
        country: '',
        enterprise: '',
        debutDate: new Date(),
        type: ''
      }
    );

  }

  onSubmit() {
    this.service.postArtist(this.saveArtist.value).subscribe({
      next: (answer) => console.log(answer),
      error: error => console.log(error),
      complete: (console.log)
      });
    this.router.navigateByUrl('/artist');
  }

}
