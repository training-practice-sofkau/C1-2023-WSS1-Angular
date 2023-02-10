import {Component, Input} from '@angular/core';
import {Ialbum} from "../../models/album.interface";
import {ALBUMS} from "../../mocks/album.mock";
import {AlbumService} from "../../services/album-services/album.service";
import * as events from "events";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  @Input() param: string = "";

  l_albums: Ialbum[] = [];
  l_albums_filtered: Ialbum[] = [];

  l_length: number = 0;


  //Variables for pagination
  defaultPerPage = 2;
  pageEvent: any;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.l_albums = ALBUMS;
    this.l_albums_filtered = this.l_albums.slice(0, this.defaultPerPage);
    this.l_length = this.l_albums_filtered.length;
  }


  searchObs(param: string, typeSearch: string) {
    this.albumService.search(typeSearch, ALBUMS, param)
      .subscribe(observer => {
        this.l_albums = observer;
      }).unsubscribe();
    this.l_albums_filtered = this.l_albums.slice(0, this.defaultPerPage);
    this.l_length = this.l_albums_filtered.length;
  }

  //New pagination method
  onPaginateChange(data : any) {
    this.l_albums_filtered = this.l_albums.slice(data.pageIndex * this.defaultPerPage, (data.pageIndex + 1) * this.defaultPerPage);
  }
}
