import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { pais } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1"
  private favoritosKey: string = 'favoritos';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino:string): Observable<pais[]> {
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<pais[]>(url);
  }

  buscarCapital(termino:string): Observable<pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<pais[]>(url);
  }


  getPaisPorCod(id:string): Observable<pais>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<pais>(url);
  }

  getRegion(text:string): Observable<pais[]>{
    const url = `${this.apiUrl}/region/${text}`
    return this.http.get<pais[]>(url);
  }

  // Método para agregar un país a la lista de favoritos en localStorage
  agregarAFavoritos(pais: pais): void {
    let favoritos: pais[] = this.obtenerFavoritos();
    favoritos.push(pais);
    localStorage.setItem(this.favoritosKey, JSON.stringify(favoritos));
  }

  // Método para obtener la lista de países favoritos desde localStorage
  obtenerFavoritos(): pais[] {
    let favoritosJson = localStorage.getItem(this.favoritosKey);
    if (favoritosJson) {
      return JSON.parse(favoritosJson);
    }

    return [];


  }

}
