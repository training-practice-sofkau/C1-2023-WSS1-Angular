import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss']
})
export class ListsContainerComponent {

  type: string ='n/a';
  typeSearch: string ="";
  param: string = "";
  paramApp: string ="";

  ngOnShowList(typeSel: string){
    if(typeSel === "album"){
      this.type = "album";
    }else if(typeSel === "artist"){
      this.type = "artist";
    }else{
      this.type = "n/a";
    }
  }

  ngOnOptionSelection(typeSearch: string) {
    let newTypeSearch: string = typeSearch;
    this.typeSearch = newTypeSearch;
  }
}
