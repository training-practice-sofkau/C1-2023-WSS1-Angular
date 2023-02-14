import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() options: string[] = [];
  @Input() results: number = 0;
  searchParam: string = '';
  @Output() onFindAll: EventEmitter<any> = new EventEmitter();
  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  findAll() {
    this.onFindAll.emit();
  }
  filter() {
    this.onFilter.emit(this.searchParam);
  }
}
