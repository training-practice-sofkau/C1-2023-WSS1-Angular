import { Component } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumHttpService } from 'src/app/services/album-http.service';

@Component({
  selector: 'app-album-delete',
  templateUrl: './album-delete.component.html',
  styleUrls: ['./album-delete.component.scss']
})
export class AlbumDeleteComponent {
  param: string = "";
  albumSelected: IAlbum|undefined;

  constructor(private service: AlbumHttpService) { }


  onIDSearch () {
    this.service.getByID(this.param).subscribe(album => {
      this.albumSelected = album.data
      console.log(album.data)
    })

  }

  onDelete(){
    console.log(this.albumSelected?.name)
    if (confirm('Do you want to delete the Album?')){
    if(this.albumSelected){
      this.service.deleteByID(this.albumSelected.albumID).subscribe((answer)=>{
        console.log(answer)
        alert(`Album with ID: ${this.albumSelected?.albumID} has been deleted!`)
      })
    }}
  }

}
