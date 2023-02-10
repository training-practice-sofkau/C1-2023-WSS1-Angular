import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor(
    private albumService: AlbumService
  ){};

  filterOption: string = "";
  @Input() filterParam: string = "";

  albumList: IAlbum[] = [];

  results: IAlbum[] = []

  ngOnInit(): void {
    this.albumService.getAll().subscribe(albums => {
      this.albumList = albums;
      this.results = albums;
    })
  }

  //TO-DO: Create a function that based of param it will show n-results
  ngOnSearch(){
    switch(this.filterOption){
      case "title": {
        this.albumService.getByTitle(this.filterParam, this.albumList).subscribe(
          albums => { this.results = albums; }
        );
        break;
      };
      case "artist": {
        this.albumService.getByArtist(this.filterParam, this.albumList).subscribe(
          albums => { this.results = albums;}
        );
        break;
      };
      case "songs": {
        this.albumService.getBySongs(this.filterParam, this.albumList).subscribe(
          albums => { this.results = albums}
        );
        break;
      };
    };
  };
}
