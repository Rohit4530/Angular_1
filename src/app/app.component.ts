import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tester';
  getColor() {
    if (Math.random() > 0.5) {
      return 'green'
    } else {
      return 'red'
    }
  }
 
}
