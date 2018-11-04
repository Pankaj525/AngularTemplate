import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        UsersRoutingModule,
        BsDropdownModule,
        ButtonsModule.forRoot()
    ],
    declarations: [UsersComponent]
})
export class UsersModule { }
