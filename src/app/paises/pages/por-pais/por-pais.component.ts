import { pais } from '../../interface/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: pais[] = [];

  constructor(private PaisService: PaisService) {}

  sugerencias(termino: string){
    this.hayError= false;
    //TODO: crear sugerencias
    this.buscar(termino)
  }


  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.PaisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
