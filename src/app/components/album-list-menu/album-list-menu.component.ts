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


  ngOnOptionSelection(typeSearch: string) {
    let newTypeSearch: string = typeSearch;
    this.typeSearch = newTypeSearch;
  }

}
