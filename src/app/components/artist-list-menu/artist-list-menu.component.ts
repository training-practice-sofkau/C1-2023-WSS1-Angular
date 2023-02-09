import { Component} from '@angular/core';

@Component({
  selector: 'app-artist-list-menu',
  templateUrl: './artist-list-menu.component.html',
  styleUrls: ['./artist-list-menu.component.scss']
})
export class ArtistListMenuComponent {

  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";
  searchStrategy: string = "";
  typeOptions: string[] = ["name", "country", "age"];
  strategyOptions: string[] =["Starts with", "Not starts with","More than", "Less than"] ;
}
