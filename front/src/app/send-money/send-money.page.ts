import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {

  constructor(public router : Router, private http: HttpService) { }

  ngOnInit() {
  }

  postRetiros(cuentaorigen:string, cuentadestino:string, monto:string) {
    console.log(cuentaorigen,cuentadestino,monto)
    this.http.sendMoney(cuentaorigen,cuentadestino,monto).then(res=>{
      console.log(res);
  })
    this.GoToHome();
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
