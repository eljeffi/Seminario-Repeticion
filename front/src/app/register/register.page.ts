import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  usuarios:any[];
  constructor(public router: Router, private http: HttpService) { 
    
    
  }


  ngOnInit() {
    this.cargarUsuarios();
    
  }

  GoToLogin(){
    this.router.navigate(['/login'])
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


  registrar(nombreValue:string, claveValue:string, celularValue:string){
    this.cargarUsuarios();
    console.log(this.usuarios)
    let repetido = false;
    if(nombreValue == "" && claveValue == "" && celularValue == ""){
      alert("NO ESTAN PERMITIDOS CAMPOS VACIOS")
    }else{
      for(let i=0; i<this.usuarios.length;i++){
        if(this.usuarios[i].celular == celularValue){
          repetido= true;
        }
      }
      if(!repetido){
        this.post(nombreValue,claveValue,celularValue);
        console.log("Usuario registrado correctamente")
        this.GoToLogin();
      }else{
        console.log("Celular ya existe")
      }
    }
    
    
  }

  post(nombreValue:string, claveValue:string, celularValue:string) {
    console.log(nombreValue,claveValue,celularValue)
    this.http.registerUsers(nombreValue,claveValue,celularValue).then(res=>{
      console.log(res);
  })
 }

}
