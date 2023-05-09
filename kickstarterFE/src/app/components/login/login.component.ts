import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAccesData } from 'src/app/interfaces/iacces-data';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  accessData:IAccesData = {
    email: "",
    password: ""
  }

  constructor(private loginService: LoginService){}

  onSubmit(){
    console.log(this.accessData);
    this.loginService.login(this.accessData);
  }
}
