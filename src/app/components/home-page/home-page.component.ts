import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'C1-2023-WSS1-Angular';
  type: string ='n/a';
  paramApp: string ="";
}
