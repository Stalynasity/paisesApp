import { pais } from './../../interface/pais.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {

  @Input() paises:pais[] = [];
  @Output() addFav: EventEmitter<string> = new EventEmitter();


}




