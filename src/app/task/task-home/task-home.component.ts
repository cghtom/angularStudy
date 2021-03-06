import {Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewTaskComponent} from "../new-task/new-task.component";
import {CopyTaskComponent} from "../copy-task/copy-task.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";
import {NewTaskListComponent} from "../new-task-list/new-task-list.component";
import {slideToRight} from "../../anima/routing.anim";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[slideToRight]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state
   lists = [{
     id:1,
     name:'等待办理',
     tasks:[{
       id:1,
       completed:false,
       priority:2,
       desc:'任务一：去啊是大叔大啊是大叔大时代啊啊是大 ',
       owner:{
         id:1,
         name:'张三 ',
         avatar:'avatars:svg-11'
       },
       dueDate:new Date()
     },{
       id:2,
       completed:true,
       desc:'任务二：写作业',
       priority:1,
       owner:{
         id:1,
         name:'李四 ',
         avatar:'avatars:svg-12'
       },
       dueDate:new Date()
     }]
   },{
     id:2,
     name:'进行中',
     priority:2,
     tasks:[{
       id:1,
       desc:'任务一：生贺',
       completed:true,
       owner:{
         id:1,
         name:'张三 ',
         avatar:'avatars:svg-11'
       },
       dueDate:new Date(),
       remider:new Date()
     },{
       id:2,
       desc:'任务二：写写',
       priority:3,
       completed:false,
       owner:{
         id:1,
         name:'李四 ',
         avatar:'avatars:svg-8'
       },
       dueDate:new Date(),
       remider:new Date()
     }]
   }]
  constructor(private dialog:MdDialog) { }

  ngOnInit() {
  }
  //创建新任务
  newTaskDialog() {
    this.dialog.open(NewTaskComponent,{
      data:{title:'新建任务'}
    })
  }

  newMoveAllDialog() {
    const dialogRef =  this.dialog.open(CopyTaskComponent,
      {data:{lists:this.lists}})
  }

  onTaskItemClick(task) {
    const  dialogRef=
      this.dialog.open(NewTaskComponent,{
        data:{title:'修改任务',task:task}
      })

  }
  onDeleteDialog(){
    const  dialogRef=
      this.dialog.open(ConfirmDialogComponent,{
        data:{title:'删除任务',content:'确认删除任务？'}
      })
    dialogRef.afterClosed().subscribe(it=>{
      console.log(it)
    })
  }

  onChangeListName() {
    const dialogRef=this.dialog.open(NewTaskListComponent,{
      data:{title:'修改列表名称'}
    })
  }

  openNewTaskDialog() {
    const dialogRef=this.dialog.open(NewTaskListComponent,{
      data:{title:'新增列表'}
    })
    dialogRef.afterClosed().subscribe(it=>{
      console.log(it)
    })
  }
}
