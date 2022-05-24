import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from '../models/usuario';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
@Input() data: Usuario[];
  usuarios: any[];
  constructor(public router: Router, private http: HttpService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  GoToHome(){
    this.router.navigate(['/home'])
  }
  GoToRegister(){
    this.router.navigate(['/register'])
  }

  cargarUsuarios(){
    this.http.loadUsers().then(
      (res: any) => {
        this.usuarios = res.results;
        console.log(res)
      },
      (error) =>{
        console.error(error);
      }
    );
    
  }
}
