import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item:any
  @Output() onInvite=new EventEmitter<void>()
  @Output() onEdit=new EventEmitter<void>()
  @Output() onDelete=new EventEmitter<void>()
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
