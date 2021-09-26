import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string='http://api.countrylayer.com/v2';
  private apiKey:string='353b6ee1422718d0f67e75dccdb11451';
  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{

    const url : string = `${this.apiUrl}/name/${termino}?access_key=${this.apiKey}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    
    const url : string = `${this.apiUrl}/capital/${termino}?access_key=${this.apiKey}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(id:string):Observable<Country>{
    const url:string =`${this.apiUrl}/alpha/${id}?access_key=${this.apiKey}`;
    return this.http.get<Country>(url);
  }

  buscarPaisesRegion(region:string):Observable<Country[]>{
    const url : string = `${this.apiUrl}/region/${region}?access_key=${this.apiKey}`;
    return this.http.get<Country[]>(url);
  }

}
