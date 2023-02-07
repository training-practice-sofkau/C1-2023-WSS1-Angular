import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'C1-2023-WSS1-Angular';
  type: string ='n/a';
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
