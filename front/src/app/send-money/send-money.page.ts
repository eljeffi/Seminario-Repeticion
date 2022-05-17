import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
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
