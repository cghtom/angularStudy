import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {itemAnim} from "../../anima/item.anim";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
   avatar='unassigned';
   @Output() itemClick = new EventEmitter()
  widerPriorty='in'
  @HostListener('mouseenter')
  onMouseEnter(){
    this.widerPriorty='in'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.widerPriorty='out'
  }
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
