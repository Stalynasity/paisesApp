import { Component } from '@angular/core';
import { pais } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css'
})
export class PorRegionComponent {

  regiones: string[] = ['americas', 'africa', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  paises:pais[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string){

    if(region === this.regionActiva){
      return;
    }

    this.regionActiva = region,

    this.paisService.getRegion(region).subscribe(
      paises => {
        this.paises = paises
      }
    )
  }



}
