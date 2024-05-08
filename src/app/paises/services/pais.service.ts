import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { pais } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1"

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
}
