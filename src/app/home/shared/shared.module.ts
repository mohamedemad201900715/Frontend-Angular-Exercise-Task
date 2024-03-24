import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PasswordComponent } from './components/password/password.component';
import { DropdownlistComponent } from './components/dropdownlist/dropdownlist.component';
import { areachartComponent } from './components/areachart/areachart.component';
import { NgApexchartsModule } from 'ng-apexcharts'; // Import NgApexchartsModule from ngx-apexcharts
import { FormsModule } from '@angular/forms';
import { ColumnchartComponent } from './components/columnchart/columnchart.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { sharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PasswordComponent,
    DropdownlistComponent,
    areachartComponent,
    ColumnchartComponent,
    GooglemapComponent,

  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    FormsModule,
    GoogleMapsModule,
    sharedRoutingModule,
    RouterModule,
    PasswordModule

  ],
  exports: [
    NavbarComponent,
    PasswordComponent,
    SidebarComponent,
    DropdownlistComponent,
    areachartComponent,
    ColumnchartComponent,
    GooglemapComponent

  ]
})
export class SharedModule { }
