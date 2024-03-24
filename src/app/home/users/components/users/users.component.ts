import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dropdownOptions: string[] = ['10', '15', '20'];
  AddUserForm!: FormGroup
  passwordValue:string=""

  constructor(private fb:FormBuilder ,
     private logInService: UsersService,
    private toaser: ToastrService,
    ) { }
 ngOnInit(): void {
  this.createFrom();
  console.log("Start");
 }
 createFrom(){
  this.AddUserForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.min(4), Validators.max(23)]],
 })
}
 handlePasswordChange(passwordValue: string) {
  this.AddUserForm.get('password')?.setValue(passwordValue);
}

}
