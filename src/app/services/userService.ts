// Contains all User related functions

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BackendService } from './backend';
import { IUser } from '../interfaces';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private users: Observable<IUser[]>;

    constructor(private backendService: BackendService) {
        this.users = this.backendService.getUsers();
    }

    getUser(id: number): Observable<any> {
        return this.backendService.getUser(id);
    }

    createUser(user: Object): Observable<Object> {
        return this.backendService.createUser(user);
    }

    getUsers() {
        return this.users;
    }

    refreshUsers() {
        this.users = this.backendService.getUsers();
    }

}