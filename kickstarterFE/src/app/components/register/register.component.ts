import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/interfaces/iuser';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user:IUser = {
    firstName: "",
    lastName: "",
    email: "",
    password:  "",
    isCreator:false
  }

  selectedRole:string = "";

  constructor( private registrationService: RegistrationService){}
  

  onSubmit(form: NgForm){
    
    if(this.selectedRole === "Creator"){
      this.user.isCreator = true;
    }else{
      this.user.isCreator = false;
    }
    this.registrationService.createUser(this.user);
    console.log(this.user);
    
  }

}
