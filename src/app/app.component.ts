import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from './components/users/users.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display
  userService = inject(UsersService)
  items = new Array();
  
  constructor() {
    this.display = this.userService.getCars().join(' ⭐️ ');
  }


  addItem(item: string) {
    this.items.push(item);
  }

}
