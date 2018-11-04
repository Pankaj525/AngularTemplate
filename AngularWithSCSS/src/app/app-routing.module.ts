import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  {
    path: '',
    component: DefaultLayoutComponent, canActivate: [AuthGuard],    
    data: {
      title: 'Home'
    },
    children: [      
      {
        path: 'dashboard',
        loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
