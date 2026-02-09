import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // POST → already works
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  //  GET → FIXED (SIMPLE)
  getUsers(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(
        map(res => res.users) //  ONLY THIS LINE MATTERS
      );
  }
}
