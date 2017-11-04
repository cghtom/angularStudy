import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  title=''
  prooritys=[{
    label:'紧急',
    value:1
  },{
    label:'重要',
    value:2
  },{
    label:'一般',
    value:2
  }]
  constructor(@Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title=this.data.title
  }

}
