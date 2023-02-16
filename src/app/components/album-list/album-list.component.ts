import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album-services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit {

    constructor(private service: AlbumService){}

  @Input() param: string = "";

  l_albums: IAlbum[] = [];


  // album_f: IAlbum = {
  //   artistID: '',
  //   name: '',
  //   country: '',
  //   enterprise: '',
  //   debutDate: new Date(),
  //   type: '',
  //   img: {url: 'https://imagoimpresiones.com/wp-content/uploads/woocommerce-placeholder.png'} 
  // };

  results: number = 0;

  page: number = 1;
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
      this.service.getAll().subscribe({
          next: (album) => {
              this.l_albums = album,
                  this.results = this.l_albums.length;
          },
          error: (console.log),
          complete: (console.log)
      })
  }

}
