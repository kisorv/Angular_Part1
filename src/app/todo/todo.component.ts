import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] = [
    { task: "vacuum my room", completed: true },
    { task: "wash windows in the living room", completed: false },
    { task: "sweep the kitchen", completed: true },
    { task: "clean bedrooms", completed: false },
    { task: "do homework from bootcamp", completed: true }
  ];

  constructor() {}

  
  ngOnInit() {}
}
