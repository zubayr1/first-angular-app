import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskdescriptions',
  standalone: true,
  imports: [],
  templateUrl: './taskdescriptions.component.html',
  styleUrl: './taskdescriptions.component.css'
})
export class TaskdescriptionsComponent {
  @Input({required:true}) description!: string;

}
