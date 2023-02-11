import { Component, OnInit, Input } from '@angular/core';
import { ALBUM } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  @Input() param: string = "";

  l_almbum: IAlbum[] = [];
  f_album: IAlbum[] = [];

  results: number = 0;
  
  page: number = 1;

  ngOnInit(): void {
    this.l_almbum = ALBUM;
    this.f_album = ALBUM;
    this.results = this.l_almbum.length;
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(param: string, typeSearch: string){
    if (param == "") {
        this.f_album = ALBUM        
    }

    if (typeSearch === "title") {
        this.f_album = this.l_almbum.filter((obj) => obj.title.toLowerCase().startsWith(param.toLowerCase()));
    } else if(typeSearch === "genre") {
        this.f_album = this.l_almbum.filter((obj) => obj.genre.toLowerCase().startsWith(param.toLowerCase()));
    } else {
        this.f_album = this.l_almbum.filter((obj) => obj.number_of_songs.toString().toLowerCase().startsWith(param.toLowerCase()));
    }
    

    this.results = this.f_album.length
  }

}
