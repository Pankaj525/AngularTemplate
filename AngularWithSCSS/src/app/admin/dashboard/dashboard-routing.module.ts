import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,canActivate: [RoleGuardGuard], 
    data: {
      title: 'Dashboard',
      expectedRole: 'User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
