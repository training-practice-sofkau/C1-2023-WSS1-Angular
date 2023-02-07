import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss']
})
export class ElementCardComponent implements OnInit{
  
  @Input() elementRender : object | undefined = undefined;
  defaultImage = '../../../assets/images/cd.png';
  imgElement :string = '';
  numberProperties:number = 0;

  ngOnInit(): void {
    if(this.elementRender) {
      this.imgElement=Object.entries(this.elementRender).find(ele=>ele[0].includes('link'))?.[1]
      this.numberProperties=Object.entries(this.elementRender).length-1;
    }

  }



  returnZero(){
    return 0;
  }

}
