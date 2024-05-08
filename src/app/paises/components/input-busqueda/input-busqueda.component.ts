import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrl: './input-busqueda.component.css',
})
export class InputBusquedaComponent implements OnInit {
  ngOnInit(): void {
    this.debouncer
    //esperar pa enviar
      .pipe(debounceTime(300))
      .subscribe((valor) => {
        console.log('debouncer:', valor);
        this.onDebounce.emit(valor);
      });
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  //se emita al dejar de escribir
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    // verificar el envio de mi input
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);

    this.debouncer.next(this.termino);
  }
}
