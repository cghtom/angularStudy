import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() item;
   avatar='unassigned';
   @Output() itemClick = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner?this.item.owner.avatar:'unassigned'
  }

  onItemClick() {
   this.itemClick.emit()
  }

  onCheckItem(event: Event) {
     event.stopPropagation()
  }
}
