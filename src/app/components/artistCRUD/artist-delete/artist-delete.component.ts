import { Component } from '@angular/core';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistHttpService } from 'src/app/services/artist-http.service';

@Component({
  selector: 'app-artist-delete',
  templateUrl: './artist-delete.component.html',
  styleUrls: ['./artist-delete.component.scss']
})
export class ArtistDeleteComponent {
  param: string = "";
  artistSelected: IArtist|undefined;

  constructor(private service: ArtistHttpService) { }


  onIDSearch () {
    this.service.getByID(this.param).subscribe(artists => {
      this.artistSelected = artists.data
      console.log(artists.data)
    })

  }

  onDelete(){
    //this.name= "hola"
    console.log(this.artistSelected?.name)
    if (confirm('Do you want to delete the Artist?')){
    if(this.artistSelected){
      this.service.deleteByID(this.artistSelected.artistID).subscribe((answer)=>console.log(answer))
    }}
  }

}
