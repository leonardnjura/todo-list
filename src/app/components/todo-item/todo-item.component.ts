import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  // Events
  onToggle(todo) {
    // Take 1: console
    // console.log('toggle ready')
    // Take 2: Real shit.. Toggle in UI and svr, :)
    // Toggel in UI
    todo.completed = !todo.completed;

    // Toggle svr
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    // Take 1: console
    // console.log('delete ready')
    // Take 2: Real shit.. 
    /* Trigger: clicking the delete button on html. We need to emit event upwards via Output() to todo component. Todo component catches it, delete event method is in todos component. import EventEmmiter and Output uptop
    Follow method to see how to delete in Ui and svr like above toggler, :)
    */
    this.deleteTodo.emit(todo);
  }
}
