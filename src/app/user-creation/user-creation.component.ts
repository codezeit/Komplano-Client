import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces';
import { UserService } from '../services/userService';
@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {
  
  public user: IUser = {
    id: 0,
    name: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  public createUser() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
    });
    this.userService.refreshUsers();
  }

  ngOnInit(): void {
  }

}

