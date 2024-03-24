import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { usersRoutingModule } from './users-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    usersRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class UsersModule { }
