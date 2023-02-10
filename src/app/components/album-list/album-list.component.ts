import { Component, Input } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumServicesService } from 'src/app/services/album-services/album-service.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent {

  constructor(private service: AlbumServicesService) {}

  @Input() param: string = "";

  //TO-DO: Define a variable that will store the information
  l_albums: IAlbum[] = [];

  results: number = 0;

  p: number = 1;
  count: number = 3;

  selected_option = '';

  ngOnInit(): void {
    this.service.getAll().subscribe((album) => this.l_albums = album);
    this.results = this.l_albums.length;
  }

    ngSearchByParam(event: Event) {
      const element = event.target as HTMLInputElement;
      this.l_albums = this.service.filterParameterType(this.selected_option, element.value)
      this.results = this.l_albums.length;
      this.p = 1;
    }

  ngInputReset(){
    this.service.getAll().subscribe((album) => this.l_albums = album);
    this.results = this.l_albums.length;
  }

}
