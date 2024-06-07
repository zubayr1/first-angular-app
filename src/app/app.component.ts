import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskdescriptionsComponent } from './taskdescriptions/taskdescriptions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TaskdescriptionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  id = '';

  get description() {
    return 'Selected id: ' + this.id;
  }

  get userId() {
    return this.users;
  }

  onSelectUserCallback(id: string) {
    this.id = id;
  }
}
