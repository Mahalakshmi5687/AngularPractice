import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private ts:TodoService) { }

  todos:any;

  ngOnInit(): void {

    this.todos = this.ts.todoList

  }

  removeTodo(index:number){
    this.ts.deleteTodo(index)
  }

}