import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';
import { IArtist } from 'src/app/models/artist.interface';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss']
})
export class ElementCardComponent implements OnInit{
  
  @Input() elementRender : object | undefined = undefined;
  @Output() idElement= new EventEmitter<string>();

  defaultImage = '../../../assets/images/cd.png';
  imgElement :string = '';
  numberProperties:number = 0;

  ngOnInit(): void {
    if(this.elementRender) {
      this.imgElement=Object.entries(this.elementRender).find(ele=>ele[0].includes('link'))?.[1]
      this.numberProperties=Object.entries(this.elementRender).length>6?Object.entries(this.elementRender).length-1:Object.entries(this.elementRender).length;
    }

  }

  returnZero(){
    return 0;
  }

  sendId(){
    if(this.elementRender){
      const idxPropertyID= Object.keys(this.elementRender).findIndex(el=>el.toLocaleLowerCase().includes('id'))
      this.idElement.emit(Object.values(this.elementRender)[idxPropertyID])
    }
    
  }

}
