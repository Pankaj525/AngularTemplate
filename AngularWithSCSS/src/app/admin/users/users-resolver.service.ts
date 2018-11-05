import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersResolverService implements Resolve<UserModel[]>{

    constructor(private userService: UsersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]>{
        return this.userService.getUsers();
    }
}