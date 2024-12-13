import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' }
  ];
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    if (this.profileForm.valid) {
      alert(
        this.profileForm.value.name + ' | ' + this.profileForm.value.email
      );
    } else {
      alert("Error");
    }
  }

  

}
