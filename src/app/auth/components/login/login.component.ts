import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  passwordValue:string=""

  constructor(private fb:FormBuilder ,
     private logInService: AuthService,
    private toaser: ToastrService,
    private router: Router

    ) { }
 ngOnInit(): void {
  this.createFrom();
  console.log("Start");
 }
 createFrom(){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.min(4), Validators.max(23)]],
 })
}
handlePasswordChange(passwordValue: string) {
  this.loginForm.get('password')?.setValue(passwordValue);
}
login(){
  if (this.loginForm.valid) {
  // this.logInService.login(this.loginForm.value).subscribe(
  //   res =>{
      // this.toaser.success("success","login success");

    // },
    // error =>{
      // this.toaser.error(error.error);

  //   }
  // )
  console.log(this.loginForm.value);
  this.router.navigate(['/dashboard']);
}
else {
  // Handle form validation errors
  this.toaser.error('Please fill all required fields and correct validation errors.', 'Error');
}

}




}
