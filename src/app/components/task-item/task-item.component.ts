import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task: Task;

  onDelete(task: Task) {
    console.log(task);
  }

}
