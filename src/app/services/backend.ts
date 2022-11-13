// This contains all backend calls

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BackendService {
    private baseUrl = '/api/';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'users');
    }

    getUser(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}` + 'users/' + id);
    }

    createUser(user: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}` + 'users', user);
    }

}

