import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: any[];
  sesion: any[];
  constructor(public router: Router, private http: HttpService) { }
  
  

  ngOnInit() {
    this.cargarUsuarios();
    //console.log(this.usuarios) //PREGUNTAR
  }

  Validar(celular:string, clave:string){
    console.log(this.usuarios) //PREGUNTAR
    let entro = false;
    for(let i=0; i<this.usuarios.length;i++){
      if(this.usuarios[i].celular == celular && this.usuarios[i].clave ==clave){
        entro= true;
        this.sesion = this.usuarios[i]
      }
    }
    if(entro){
      console.log("CREDENCIALES CORRECTA")
      this.GoToHome(this.sesion);
    }else{
      console.log("NO EXISTE O INCORRECTO")
    }
    
  }

  GoToHome(sesion:any){
        
    this.router.navigate(['/home/',sesion])
  }
  GoToRegister(){
    this.router.navigate(['/register'])
  }

  cargarUsuarios(){
    this.http.loadUsers().then(
      (res: any) => {
        
        this.usuarios= res;
        
      },
      (error) =>{
        console.error(error);
      }
    );
    
  }
}
