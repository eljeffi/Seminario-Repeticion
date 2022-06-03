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
  constructor(public router : Router, private http: HttpService, public activedrouter: ActivatedRoute ) { }

  ngOnInit() {
    this.sesion = this.activedrouter.snapshot.params
    console.log(this.sesion)
  }

  postRetiros(cuentadestino:string, monto:string) {
    console.log(this.sesion.celular,cuentadestino,monto)
    this.http.sendMoney(this.sesion.celular,cuentadestino,monto).then(res=>{
      console.log(res);
  })
    this.GoToHome();
  }

  GoToLogin(){
    this.router.navigate(['/login'])
  }
  GoToHome(){
    this.router.navigate(['/home',this.sesion])
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
