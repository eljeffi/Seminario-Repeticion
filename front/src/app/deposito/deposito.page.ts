import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {
  sesion: any;
  constructor(public router : Router, private http: HttpService, public activedrouter: ActivatedRoute ) { }

  ngOnInit() {
    this.sesion = this.activedrouter.snapshot.params
    console.log(this.sesion)
  }

  depositar(){
    
  }

}
