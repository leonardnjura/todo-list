import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  // Use constructor to inject stuff
  constructor(private http: HttpClient) {}

  // GET Todos
  getTodos(): Observable<Todo[]> {
    // Take 1: Local Data
    // return [
    //   {
    //     id: 1,
    //     title: "Buy neighbor's kiddo weetabix and yogurt",
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
    //   {
    //     id: 3,
    //     title: 'Learn Go',
    //     completed: false
    //   }
    // ];

    // Take 2: Api Data. Ensure you import HttpClientModule in app.module.ts 👈 and HttpClient uptop 👆
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // TOGGLE service
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // DELETE service
  deleteTodo(todo: Todo): Observable<Todo> {
    // Remove from UI elsewhere
    // Remove from svr
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // ADD service
  addTodo(todo: Todo): Observable<Todo> {
    // Add to UI
    const url = `${this.todosUrl}`;
    return this.http.post<Todo>(url, todo, httpOptions);
  }
}
