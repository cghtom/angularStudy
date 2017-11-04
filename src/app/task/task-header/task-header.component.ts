import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header=''
  @Output() newTask = new EventEmitter()
  @Output() move = new EventEmitter<void>()
  @Output() onDelete = new EventEmitter<void>()
  @Output() onChangeName = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }

  newTaskClick() {
    this.newTask.emit()
  }

  moveAllTask() {
    this.move.emit()
  }

  onDeleteClick() {
    this.onDelete.emit()
  }

  changeListName() {
    this.onChangeName.emit()
  }
}
