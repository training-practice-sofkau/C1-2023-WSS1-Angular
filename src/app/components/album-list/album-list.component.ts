import { Component, OnInit, Input } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit {

    constructor(private service: AlbumService){}

  @Input() param: string = "";

  l_albums: IAlbum[] = [];

  results: number = 0;

  page: number = 1;
  
  ngOnInit(): void {
    this.service.getAll().subscribe((val) => {this.l_albums = val})
    this.results = this.l_albums.length;
  }

  ngOnSearch(){
      let re = /(\w+)+(\W)+(\w+)/;
      let filter = re.exec(this.param);

      let p = filter![1];
      let s = filter![2];
      let b = filter![3];


      this.service.getByParameter(p, s, b).subscribe((val) => {this.l_albums = val})
      
      this.results = this.l_albums.length
  }

}
