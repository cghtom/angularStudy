import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {cardAnim} from "../../anima/card.animation";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[cardAnim]
})
export class ProjectItemComponent implements OnInit {
  @Input() item:any
  @Output() onInvite=new EventEmitter<void>()
  @Output() onEdit=new EventEmitter<void>()
  @Output() onDelete=new EventEmitter<void>()
  @HostBinding('@card') cardState = 'out'
  @HostListener('mouseenter')
  onMouseEnter(){
    this.cardState='hover'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.cardState='out'
  }
  constructor() { }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit()
  }

  onEidtClick() {
    this.onEdit.emit()
  }

  onDeleteProject() {
    this.onDelete.emit()
  }
}
