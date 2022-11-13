import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { BackendService } from '../services/backend';
import { Observable } from 'rxjs';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // getUsers from the backend is an observable
  // so we need to subscribe to it
  public users: Observable<IUser[]>;

  // inject the backend service
  constructor(private userService: UserService) { 
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    console.log("Hey There!")
  }

}


