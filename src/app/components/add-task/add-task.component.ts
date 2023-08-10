import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from "rxjs";

import { UiService } from 'src/app/services/ui.service';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  text: string;
  day: string;
  reminder: boolean = false;

  showAddTask: boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  
  constructor(private uiService: UiService) {
    uiService.onToggle().subscribe((showAddTask) => {
      this.showAddTask = showAddTask;
    })
  }

  onSubmit() {
    if(!this.text) {
      alert("Please add a Text");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;



  }


}
