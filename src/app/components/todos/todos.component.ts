import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // Use constructor to inject/import services
  constructor(private todoService: TodoService) {}

  // Use init like reactjs component did mount, :)
  ngOnInit() {
    // Take 1: Inline Test data
    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Buy neighbor\'s kiddo weetabix and yogurt',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Take trash outside',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Learn Flutter',
    //     completed: false
    //   },
    // ]

    // Take 2: Modulat Test Data. Use service to bring in data. Init in constructor,
    // NOTE .subscribe === .then
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // console.log('!delete me');
    // Delete in UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    //Delete in svr
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
