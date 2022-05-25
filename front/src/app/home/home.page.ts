import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    public router: Router,
    private http: HttpService  
    ) {}
  

  ngOnInit() {
    this.cargarDatos();
    
  }

  cargarDatos(){
    
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

  

}
