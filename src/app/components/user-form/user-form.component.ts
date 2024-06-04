import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = { name: '', email: '', phone: '', address: '' };
  fields = [
    { label: 'Nombre', name: 'name', type: 'text', required: true },
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Teléfono', name: 'phone', type: 'text', required: true },
    { label: 'Dirección', name: 'address', type: 'text', required: true },
  ];

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.addUser(this.user);
    this.user = { name: '', email: '', phone: '', address: '' }; // Reset the form
  }
}
