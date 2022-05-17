import { Component } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router  
    ) {}
  
  GoToLogin(){
    this.router.navigate(['/login'])
  }

  GoToAccount(){
    this.router.navigate(['/account'])
  }

  GoToHome(){
    this.router.navigate(['/home'])
  }
  GoToSendMoney(){
    this.router.navigate(['/send-money'])
  }
}
