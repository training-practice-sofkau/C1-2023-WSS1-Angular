import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistsService } from 'src/app/services/artist-service/artists.service';

@Component({
  selector: 'app-artist-put-form',
  templateUrl: './artist-put-form.component.html',
  styleUrls: ['./artist-put-form.component.scss'],
})
export class ArtistPutFormComponent implements OnInit {
  @Input() foundedArtist: IArtist = {
    type: '',
    name: '',
    country: '',
    artistID: '',
    enterprise: '',
    debutDate: new Date(),
  };

  artist: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder, private service: ArtistsService) {}

  ngOnInit(): void {
    this.artist = this.builder.group({
      artistID: this.foundedArtist.artistID,
      name: this.foundedArtist.name,
      type: this.foundedArtist.type,
      country: this.foundedArtist.country,
      debutDate: this.foundedArtist.debutDate,
      enterprise: this.foundedArtist.enterprise,
    });
    this.artist.valueChanges.subscribe((change) => console.log(change));
  }

  onSubmit() {
    this.service
      .putArtist(this.artist.value)
      .subscribe((answer) => console.log(answer));
  }
}
