import { Component } from '@angular/core';

@Component({
  selector: 'app-album-list-menu',
  templateUrl: './album-list-menu.component.html',
  styleUrls: ['./album-list-menu.component.scss']
})
export class AlbumListMenuComponent {

  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";
  searchStrategy: string = "";
  typeOptions: string[] = ["title", "genre", "number of songs", "ID"];
  strategyOptions: string[] =["Starts with", "Not starts with","More than", "Less than"] ;

}
