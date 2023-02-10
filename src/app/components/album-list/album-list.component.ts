import {Component, Input} from '@angular/core';
import {Ialbum} from "../../models/album.interface";
import {ALBUMS} from "../../mocks/album.mock";
import {AlbumService} from "../../services/album-services/album.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {
  @Input() param: string = "";

  l_albums: Ialbum[] = [];

  l_length: number = 0;

  pagFrom: number = 0;
  pagTo: number = 3;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.l_albums = ALBUMS;
    this.l_length = this.l_albums.length;
  }


  searchObs(param: string, typeSearch: string) {
    this.albumService.search(typeSearch,ALBUMS,param)
      .subscribe(observer =>{
        this.l_albums = observer;
      }).unsubscribe();
    this.l_length = this.l_albums.length;
  }

  changePage(change: boolean) {
    if (change) {
      if (!(this.pagTo == this.l_length - 1)) {
        this.pagFrom += 4;
        this.pagTo += 4;
      }
    } else if (!change) {
      if (!(this.pagFrom == 0)) {
        this.pagFrom -= 4;
        this.pagTo -= 4;
      }
    }

  }
}
