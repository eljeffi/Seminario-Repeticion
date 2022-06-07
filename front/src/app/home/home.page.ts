import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sesion: any;
  constructor(
    public router: Router,
    private http: HttpService,
    public activedrouter: ActivatedRoute  
    ) {
      
    }
  

  ngOnInit() {
    this.sesion = JSON.parse(localStorage.getItem("usuario"))
    console.log(this.sesion)
  }


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

  GoToDeposito(){
    this.router.navigate(['/deposito'])
  }

  

}
