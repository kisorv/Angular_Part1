import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] = [
    { task: "vacuum", completed: true },
    { task: "wash windows", completed: false },
    { task: "sweep", completed: true },
    { task: "clean bedrooms", completed: false },
    { task: "do homework", completed: true }
  ];

  constructor() {}

  
  ngOnInit() {}
}
