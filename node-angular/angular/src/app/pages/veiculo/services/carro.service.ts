import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any>('http://localhost:3000/api/carros');

  }

  post(carro:any) {
    return this.http.post<any>('http://localhost:3000/api/carros',carro);

  }


  
}

