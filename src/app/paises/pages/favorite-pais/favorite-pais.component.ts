import { pais } from './../../interface/pais.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-pais',
  templateUrl: './favorite-pais.component.html',
  styleUrl: './favorite-pais.component.css',
})
export class FavoritePaisComponent implements OnInit {
  ngOnInit(): void {
    this.mostrarFavorito();
  }

  paises: pais[] = [];
  PaisesFavoritos: pais[] = [];
  PaisesFavoritos2: pais[] = [];


  mostrarFavorito(): void {
    const favorito = JSON.parse(localStorage.getItem('favorite') || '[]');
    this.PaisesFavoritos = favorito;

  }

  EliminarAFavoritos(index: number) {
    console.log(index);

    const favoritos = JSON.parse(localStorage.getItem('favorite') || '[]');
    favoritos.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(favoritos));
    this.mostrarFavorito();
  }
}
