import { pais } from './../../interface/pais.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-pais',
  templateUrl: './favorite-pais.component.html',
  styleUrl: './favorite-pais.component.css'
})
export class FavoritePaisComponent {

  paises:pais[] = [];



}
