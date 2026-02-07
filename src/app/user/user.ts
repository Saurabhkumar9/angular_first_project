import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services/user';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.html',
   styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  user: User = {
    username: '',
    email: '',
    fatherName: '',
    age: 0,
    gender: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  addUser(): void {
    this.userService.addUser(this.user).subscribe(() => {
      this.fetchUsers();
      this.resetForm();
    });
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  resetForm(): void {
    this.user = {
      username: '',
      email: '',
      fatherName: '',
      age: 0,
      gender: '',
      phone: '',
      address: ''
    };
  }
}
