import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "" ,
    component: LayoutComponent,
    children:[
      {
        path: "users" ,
        loadChildren: () => import(`./users/users.module`).then(m => m.UsersModule)
      },
      {
        path: "dashboard" ,
        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
      }
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
