import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist.service';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-new-artist-form',
  templateUrl: './new-artist-form.component.html',
  styleUrls: ['./new-artist-form.component.scss'],
})
export class NewArtistFormComponent implements OnInit {
  artist: FormGroup = new FormGroup({});
  @Input() inputArtist: IArtist = {
    artistID: '',
    country: '',
    name: '',
    debutDate: '',
    enterprise: '',
    type: '',
  };
  @Output() back: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private artistStervice: ArtistService,
    private formsService: FormsService
  ) {}

  ngOnInit(): void {
    this.onEdit();
    this.formsService.artistTriger.subscribe((artist) => {
      this.inputArtist = artist;
      this.onEdit();
    });
  }

  onEdit() {
    this.artist = this.builder.group({
      artistID: this.inputArtist.artistID,
      name: this.inputArtist.name,
      country: this.inputArtist.country,
      enterprise: this.inputArtist.enterprise,
      debutDate: this.inputArtist.debutDate,
      type: this.inputArtist.type,
    });
  }

  clearForm() {
    this.inputArtist = {
      artistID: '',
      country: '',
      name: '',
      debutDate: '',
      enterprise: '',
      type: '',
    };
    this.onEdit();
  }

  onSubmit() {
    this.artistStervice
      .postArtist(this.artist.value)
      .subscribe((answer) => console.log(answer));
    this.clearForm();
  }

  onBack() {
    this.back.emit(true);
    this.clearForm();
  }
}
