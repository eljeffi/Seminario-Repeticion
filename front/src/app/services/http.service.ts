import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  //GET USUARIO
  loadUsers() {
    return this.http
    .get('http://localhost:3000/usuarios').toPromise();
  }

  //POST RETIRO
  sendMoney(cuentaorigen:string, cuentadestino:string, monto:string){
    const datos = {
      fecha: "2022-05-25T03:52:13.615Z", //MEJORA
      cuentaorigen: parseInt(cuentaorigen),
      cuentadestino: parseInt(cuentadestino),
      monto: parseInt(monto)
      };
      const options = {
        headers: {
         'Content-Type': 'application/json'
       }
     };
     
    const url = 'http://localhost:3000/retiros';
  
    return this.http.post(url, JSON.stringify(datos), options).toPromise();
  }

  //POST USUARIO
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