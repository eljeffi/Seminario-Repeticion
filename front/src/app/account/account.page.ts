import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(public router: Router) { }

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
}
