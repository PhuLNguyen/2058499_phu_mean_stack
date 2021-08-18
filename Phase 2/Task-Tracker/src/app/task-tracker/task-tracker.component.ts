// 2058499 Task Tracker

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {
  displayedColumns: string[] = ["deadline", "id", "name", "task"];
  taskList: Object[] = [{
    "empId": "01234567890123456789",
    "empName": "John Smith",
    "name": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "deadline": "2021-08-31"
  }];

  // enable parent->child relationship to edit mat-table
  @ViewChild(MatTable) table?: MatTable<Object[]>;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskRef: NgForm) {
    let task = taskRef.value;

    // Append the new task in front of the array.
    //  So it will appear on the top of the table.
    this.taskList.unshift({
      "empId": task.empId,
      "empName": task.empName,
      "name": task.name,
      "deadline": task.deadline
    });

    // Update the table to show new task. 
    this.table?.renderRows();
  }
}
