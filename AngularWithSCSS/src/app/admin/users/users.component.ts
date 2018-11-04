import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users:UserModel[];
  constructor(private route: ActivatedRoute) { 
    this.users = this.route.snapshot.data['usersList'];
  }

  ngOnInit() {
    console.log(this.users);
  }

}
