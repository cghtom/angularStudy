import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter()
  @Output() themeToggle = new EventEmitter<boolean>()
  constructor() {
  }

  ngOnInit() {
  }

  //打开侧滑
  openSlideBar() {
     this.toggle.emit()
  }
  onChange(checked:boolean){
     this.themeToggle.emit(checked)
  }
}
