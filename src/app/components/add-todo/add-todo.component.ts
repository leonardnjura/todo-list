import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); 
  /* 
  Note: Type any for fly type. We dont need id to POST thus we wont ode type Todo, :)
  catch above addTodo upward output in todo html. It will run a method in add-todo component*/

  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
