import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  name:string = 'Leo';

  constructor(){
    this.name = 'Keshville'
    this.changeName('Stacy')
    console.log(123)
  }

  changeName(name:string):void{
    this.name = name 
  }
}
