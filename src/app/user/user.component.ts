import { Component, Input, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  userName!: string;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }
 
 

}
