import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from './usertask.module';

@Component({
  selector: 'app-usertasks',
  standalone: true,
  imports: [],
  templateUrl: './usertasks.component.html',
  styleUrl: './usertasks.component.css'
})
export class UsertasksComponent {
  @Input({required:true}) task!: task

  @Output() taskid = new EventEmitter<string>();

  onCompleted()
  {
    this.taskid.emit(this.task.id);
  }

}
