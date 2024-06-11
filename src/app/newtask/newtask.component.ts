import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  @Output() isAddingTask = new EventEmitter();
  @Output() add = new EventEmitter<{title: string, summary: string, date: string}>();

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDueDate = signal('')

  onCancel() {
    this.isAddingTask.emit();
  }

  onSubmit() {
    this.add.emit(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDueDate()
      }
    );
  }

}
