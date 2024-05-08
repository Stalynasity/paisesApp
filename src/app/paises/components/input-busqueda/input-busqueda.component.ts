import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrl: './input-busqueda.component.css'
})
export class InputBusquedaComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }



}
