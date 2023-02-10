import { Component, Input, OnInit } from '@angular/core';
import { ALBUM } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album-services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit{
  @Input() param: string = "";
  @Input() typeSearch: string = "";

  //Variables to store the info
  l_albums: IAlbum[] = [];
  results: number = 0;
  p: number=0;

  constructor(private albumService: AlbumService){}

  ngOnInit(): void {
    this.albumService.getAll().subscribe((album: IAlbum[]) => this.l_albums = album);
    this.results = this.l_albums.length;
  }

  ngOnSearch(param: string, typeSearch: string): void{
    if(param=="" || typeSearch ==="Select an option") this.ngOnInit();
    switch(typeSearch){
      case "title":
        this.albumService.getByTitle(param).subscribe((album: IAlbum[]) => this.l_albums = album);
        this.results = this.l_albums.length;
        break;
      case "artist":
        this.albumService.getByArtist(param).subscribe((album: IAlbum[]) => this.l_albums = album);
        this.results = this.l_albums.length;
        break;
      case "songs":
        this.albumService.getBySongs(param).subscribe((album: IAlbum[]) => this.l_albums = album);
        this.results = this.l_albums.length;
        break;
    }
  }

}
