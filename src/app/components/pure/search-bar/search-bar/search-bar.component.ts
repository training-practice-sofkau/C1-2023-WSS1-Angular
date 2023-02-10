import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Input() options: string[] = [];
  @Input() results: number = 0;
searchParam: string = "";
searchBy: number = 0;
searchOperator: number = 1;
  @Output () buttonClick: EventEmitter<any[]> = new EventEmitter();

  search(){
    this.buttonClick.emit([this.searchParam,this.searchBy,this.searchOperator]);
    this.searchParam= "";
  }

}
