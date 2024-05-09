import { pais } from './../../interface/pais.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent implements OnInit{

  ngOnInit(): void {
    const favoritosJson = localStorage.getItem('favorite');
    if (favoritosJson) {
      this.favorito = JSON.parse(favoritosJson);
    }
  }

  @Input() paises:pais[] = [];

  favorito:pais[] = [];
  Newfavorito:pais[] = [];

  agregarAFavoritos(index: number) {

    const listFavorit:pais[] = JSON.parse(localStorage.getItem('favorite') || '[]')
    const value = this.paises[index];

    const valueIndex = listFavorit.find(x=> x.cca2 === value.cca2)

    if (!valueIndex) {
      this.favorito.push(this.paises[index])
      localStorage.setItem('favorite', JSON.stringify(this.favorito))
    } else {
      return alert('ya esta guardado')
    }


  }
}




