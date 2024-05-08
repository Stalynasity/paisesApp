import { Component } from '@angular/core';
import { pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css'
})
export class PorCapitalComponent {

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

    this.PaisService.buscarCapital(this.termino).subscribe(
      (resp) => {
        this.paises = resp;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

}
