import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {
  sesion: any;
  constructor(public router : Router, private http: HttpService, public activedrouter: ActivatedRoute ) { }

  ngOnInit() {
    this.sesion = JSON.parse(localStorage.getItem("usuario"))
    console.log(this.sesion)
  }

  depositar(Monto:any, metodo:any){
    
    let nuevosaldo = parseInt(Monto) +parseInt(this.sesion.saldo);
   
    let data = {
      "id": this.sesion.id,
      "nombre": this.sesion.nombre,
      "clave": this.sesion.clave,
      "celular": parseInt(this.sesion.celular),
      "saldo": nuevosaldo
    }

    this.http.actualizarDinero(data).then(
      (res: any) => {
        console.log("Se actualizó", res)
        this.sesion.saldo = data.saldo
        localStorage.setItem("usuario", JSON.stringify(this.sesion))
        this.router.navigate(['/home'])
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
