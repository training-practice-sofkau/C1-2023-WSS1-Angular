import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

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

}
