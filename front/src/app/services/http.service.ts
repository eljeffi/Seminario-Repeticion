import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  loadUsers() {
    return this.http
    .get('http://localhost:3000/usuarios').toPromise();
  }

  registerUsers(nombre:string, clave:string, celular:string) {
    const datos = {
      nombre: nombre,
      clave: clave,
      celular: parseInt(celular),
      saldo: 0
      };

      const options = {
        headers: {
         'Content-Type': 'application/json'
       }
     };
     
    const url = 'http://localhost:3000/usuarios';
  
    return this.http.post(url, JSON.stringify(datos), options).toPromise();
  }
}
