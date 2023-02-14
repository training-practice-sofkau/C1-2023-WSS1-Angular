import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArtistsService } from 'src/app/services/artist-service/artists.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss'],
})
export class ArtistFormComponent implements OnInit {
  saveArtist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistsService) {}

  ngOnInit(): void {
    this.saveArtist = this.builder.group({
      type: '',
      name: '',
      country: '',
      enterprise: '',
      debutDate: new Date(),
    });
    this.saveArtist.valueChanges.subscribe((change) => console.log(change));
  }

  onSubmit() {
    this.service
      .postArtist(this.saveArtist.value)
      .subscribe((answer) => console.log(answer));
  }
}
