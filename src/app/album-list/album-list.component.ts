import { Component, OnInit } from '@angular/core';
import { ALBUMS } from 'src/app/mocks/album.mock';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album-services/album.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit{

  constructor(private service: AlbumService) {}

  param: string = "";
  choice: string = "";
  page: number = 0;

  l_albums: IAlbum[]=[];
  results: number = 0;

  ngOnInit(): void {
    this.service.getAll().subscribe((album) => this.l_albums = album);
    this.results = this.l_albums.length;
  }

  ngOnSearch(choice : string){
    console.log(this.param)
    console.log(this.choice)
    if (choice == 'titleInclude')this.service.getByTitleInclude(this.param).subscribe((artist) => (this.l_albums = artist));
    if (choice == 'titleExclude')this.service.getByTitleExclude(this.param).subscribe((artist) => (this.l_albums = artist));
    if (choice == 'dateGreat')this.service.getByDateGreat(Number(this.param)).subscribe((artist) => (this.l_albums = artist));
    if (choice == 'dateLess')this.service.getByDateLess(Number(this.param)).subscribe((artist) => (this.l_albums = artist));
    if (choice == 'genreInclude')this.service.getByGenreInclude(this.param).subscribe((artist) => (this.l_albums = artist));
    if (choice == 'genreExclude')this.service.getByGenreExclude(this.param).subscribe((artist) => (this.l_albums = artist));

    this.results = this.l_albums.length;

  }


}
