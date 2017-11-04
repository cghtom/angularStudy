import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
   title=''
  constructor(@Inject(MD_DIALOG_DATA) private data,
              private dialogref:MdDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
     this.title=this.data.title
  }

  onSaveClick() {
    this.dialogref.close(this.title)
  }
}
