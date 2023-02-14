import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent {

  constructor(private formsService : FormsService){}

  @Input() artist: IArtist = {
    artistID:"n/a",
    country: "n/a",
    name: "n/a",
    debutDate:"n/a",
    enterprise:"n/a",
    type:"n/a",
  };
 @Output() onDelete: EventEmitter<string> = new EventEmitter();
 @Output() onEdit: EventEmitter<IArtist> = new EventEmitter();

 deleteA(){

   this.onDelete.emit(this.artist.artistID);
  }

  edit(){
    this.formsService.artistTriger.next(this.artist)
  }
}
