import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";

  constructor() {

  }
  
  ngOnInit(): void {
    
  }  

  toggleAddTask(event: string) {
    console.log(event);
  }

}