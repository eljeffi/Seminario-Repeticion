import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {
  sesion: any;
  monto: any;
  cuentadestino: any;
  constructor(public router : Router, private http: HttpService, public activedrouter: ActivatedRoute ) { }

  ngOnInit() {
    this.sesion = JSON.parse(localStorage.getItem("usuario"))
    console.log(this.sesion)
  }

  postRetiros() {
    this.sesion = JSON.parse(localStorage.getItem("usuario"))
    console.log(this.sesion)
    console.log("funciona")
    /*console.log(this.cuentadestino,this.monto)
    this.http.sendMoney(this.sesion.celular,this.cuentadestino,this.monto).then(res=>{
      console.log(res);
      this.GoToHome();
  })*/
    
  }

  GoToLogin(){
    this.router.navigate(['/login'])
  }
  GoToHome(){
    this.router.navigate(['/home'])
  }

  GoToChangePassword(){
    this.router.navigate(['/change-password'])
  }

  GoToDeleteAccount(){
    this.router.navigate(['/delete-account'])
  }

  GoToAccount(){
    this.router.navigate(['/account'])
  }

  GoToSendMoney(){
    this.router.navigate(['/send-money'])
  }
}
