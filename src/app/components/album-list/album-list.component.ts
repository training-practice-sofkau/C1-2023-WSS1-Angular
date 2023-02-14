import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumHttpService } from 'src/app/services/album-http.service';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  @Input() param: string = "";
  @Input() typeSearch: string = "";
  @Input() searchStrategy: string = "";

  l_albums: IAlbum[] = [];
  l_albums_db: IAlbum[] = [];
  results: number = 0;
  p: number = 1;


  constructor(private service:AlbumService, private service1: AlbumHttpService){}

  getAll(): void {
    this.service1.getAll().subscribe({
      next: (albums) => {
        this.l_albums = albums.data,
        this.l_albums_db = albums.data,
        this.results = this.l_albums.length;
        console.log(albums.data)
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnSearch(param: string) {
    //this.l_albums = ALBUMS;

    switch (this.typeSearch) {
      case "title": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByTitle(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNoTitle(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreTitle(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessTitle(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      case "genre": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByGenre(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotGenre(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreGenre(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessGenre(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      case "number of songs": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByNumberOfSongs(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotNumberOfSongs(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreNumberOfSongs(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessNumberOfSongs(param, this.l_albums_db).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      default: {
        this.getAll();
        break;
      }
    }
    this.results = this.l_albums.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnSearch(this.param);
  }
}
