import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { User } from './user.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  @Input({required:true}) user!: User
  @Input({required:true}) selected!: boolean

  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  onSelectuser() {
    this.select.emit(this.user.id);
  }

  // get imagepath()
  // {
  //   return 'assets/users/' + this.avatar();
  // }

  imagepath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  })
}
