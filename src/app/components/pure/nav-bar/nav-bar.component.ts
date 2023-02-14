import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private formsService: FormsService) {}

  artistForm: boolean = false;

  inputArtist: IArtist = {
    artistID: '',
    country: '',
    name: '',
    debutDate: '',
    enterprise: '',
    type: '',
  };

  ngOnInit(): void {
    this.formsService.artistTriger.subscribe((artist) => {
      if (!this.artistForm) {
        this.artistForm = true;
        this.inputArtist = {
          artistID: artist.artistID,
          country: artist.country,
          name: artist.name,
          debutDate: artist.debutDate,
          enterprise: artist.enterprise,
          type: artist.type,
        };
      }
    });
  }
  createFrom(isForm: boolean) {
    this.artistForm = isForm;
    this.inputArtist = {
      artistID: '',
      country: '',
      name: '',
      debutDate: '',
      enterprise: '',
      type: '',
    };
  }
}
