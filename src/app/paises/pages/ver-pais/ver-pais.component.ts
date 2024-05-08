import { pais } from './../../interface/pais.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrl: './ver-pais.component.css'
})
export class VerPaisComponent implements OnInit {

  pais!: pais[];

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService
  ){}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCod(id)
    //     .subscribe(pais => {
    //       console.log(pais);
    //     })
    //   })

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorCod(id)),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais);
  }
}
