import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
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
  results: number = 0;
  p: number = 1;


  constructor(private service:AlbumService){}

  ngOnInit(): void {
    this.service.getAll().subscribe((artist) => this.l_albums = artist);
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string) {
    this.l_albums = ALBUMS;

    switch (this.typeSearch) {
      case "title": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByTitle(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNoTitle(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreTitle(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessTitle(param).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      case "genre": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByGenre(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotGenre(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreGenre(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessGenre(param).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      case "number of songs": {
        if (this.searchStrategy === "Starts with") {
          this.service.getByNumberOfSongs(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Not starts with") {
          this.service.getByNotNumberOfSongs(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "More than") {
          this.service.getByMoreNumberOfSongs(param).subscribe(albums => this.l_albums = albums)
        };
        if (this.searchStrategy === "Less than") {
          this.service.getByLessNumberOfSongs(param).subscribe(albums => this.l_albums = albums)
        };
        break;
      }
      default: {
        this.l_albums = ALBUMS;
        break;
      }
    }
    this.results = this.l_albums.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnSearch(this.param);
  }
}
