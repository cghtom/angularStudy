import {Component, HostBinding, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";
import {InviteComponent} from "../invite/invite.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";
import {slideToRight} from "../../anima/routing.anim";
import {listAnima} from "../../anima/list.anima";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[slideToRight,listAnima]
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state
  projects = [
    {
      id:1,
      name: '企业协助做平台',
      desc: "这是一个企业协助项目",
      coverImg: "assets/img/covers/0.jpg"
    },
    {
      id:2,
      name: '企业协助做平台',
      desc: "这是一个企业协助项目",
      coverImg: "assets/img/covers/1.jpg"
    }
  ]

  constructor(private dialog:MdDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
     const dialogRef=this.dialog.open(NewProjectComponent, {data:{title:"新增项目："}})
    dialogRef.afterClosed().subscribe(it=>{
      this.projects=[...this.projects,{
        id:3,
        name: '新项目',
        desc: "这是一个新项目",
        coverImg: "assets/img/covers/8.jpg"
      },{
        id:4,
        name: '新项目',
        desc: "这是一个新项目",
        coverImg: "assets/img/covers/8.jpg"
      }]
    })
  }

  openInviteDialog() {
    const dialogRef=this.dialog.open(InviteComponent)
  }

  onEditDialog() {
    const dialogRef=this.dialog.open(NewProjectComponent, {data:{title:'编辑项目：'}})
  }

  onDeleteDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {data:{title:'删除项目',content:'确认删除该项目？'}})
    dialogRef.afterClosed().subscribe(it=>{
      this.projects=this.projects.filter(it=>
        it.id!=project.id
      )
    })
  }
}
