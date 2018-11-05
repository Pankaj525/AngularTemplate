import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { RoleGuardGuard } from 'src/app/role-guard.guard';
import { UsersComponent } from './users.component';
import { UsersResolverService } from './users-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent, canActivate: [RoleGuardGuard],
        resolve: { usersList: UsersResolverService },
        data: {
            title: 'Users',
            expectedRole: 'Admin'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
