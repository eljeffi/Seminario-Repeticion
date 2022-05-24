import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  constructor(public router: Router, private http: HttpService) { 
    
    
  }


  ngOnInit() {
  }

  GoToLogin(){
    this.router.navigate(['/login'])
  }

  post(nombreValue:string, claveValue:string, celularValue:string) {
    console.log(nombreValue,claveValue,celularValue)
    this.http.registerUsers(nombreValue,claveValue,celularValue).then(res=>{
      console.log(res);
  })
 }

}
