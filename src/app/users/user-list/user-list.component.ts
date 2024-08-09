import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NzPaginationModule, RouterModule, CommonModule, MatProgressBarModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  page: number = 1;
  total = 0;
  per_page = 0;
  total_pages = 0;

  gettingData = true;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.page).subscribe(response => {
      this.users = response.data;
      this.total = response.total;
      this.total_pages = response.total_pages;
      this.per_page = response.per_page;
      this.gettingData = false;
    }, error => {
      this.gettingData = false;
      console.log(error);
    });
  }
}
