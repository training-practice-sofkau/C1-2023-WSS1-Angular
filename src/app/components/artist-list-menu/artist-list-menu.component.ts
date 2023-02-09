import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list-menu',
  templateUrl: './artist-list-menu.component.html',
  styleUrls: ['./artist-list-menu.component.scss']
})
export class ArtistListMenuComponent {

  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";

  ngOnOptionSelection(typeSearch: string) {
    let newTypeSearch: string = typeSearch;
    this.typeSearch = newTypeSearch;
  }

}
