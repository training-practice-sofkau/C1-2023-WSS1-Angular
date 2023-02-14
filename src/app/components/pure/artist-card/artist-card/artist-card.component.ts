import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent {
  @Input() artist: IArtist = {
    artistID:"n/a",
    country: "n/a",
    name: "n/a",
    debutDate:"n/a",
    enterprise:"n/a",
    type:"n/a",
  };
 @Output() onDelete: EventEmitter<string> = new EventEmitter();

 deleteA(){

   this.onDelete.emit(this.artist.artistID);
  }

  edit(){
  }
}
