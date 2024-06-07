import { Component, Input } from '@angular/core';
import { UsertasksComponent } from '../usertasks/usertasks.component';
import { NewtaskComponent } from '../newtask/newtask.component';

@Component({
  selector: 'app-taskdescriptions',
  standalone: true,
  imports: [UsertasksComponent, NewtaskComponent],
  templateUrl: './taskdescriptions.component.html',
  styleUrl: './taskdescriptions.component.css'
})
export class TaskdescriptionsComponent {
  @Input({required:true}) description!: string;
  @Input({required:true}) userId!: string;
  isAddingTaskValue = false

  get selectedUserTasks()
  {
    return this.tasks.filter((task) => task.userId===this.userId)
  }

  isAddingTask = false
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  onAddTask() {
    this.isAddingTask = true
  }

  onAddTaskCallback(taskdata: {title: string, summary: string, date: string})
  {
    this.tasks.push({id: new Date().getTime().toString(), userId: this.userId, title: taskdata.title, summary: taskdata.summary, dueDate: taskdata.date})
    this.isAddingTask = false
  }

  onCancelAddTaskCallback() {
    this.isAddingTask = false
  }

  onSelecttaskidCallback(taskid: string)
  {
    this.tasks = this.tasks.filter((task)=> task.id!==taskid)
  }

}
