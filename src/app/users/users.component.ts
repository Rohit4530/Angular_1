import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userCreatedStatus = 'user is not created'
  userList: string[] = [];
  constructor() {
  }
  ngOnInit(): void {
  }
  onClick(event: string) {
    this.userList.push(event);
  }
}
