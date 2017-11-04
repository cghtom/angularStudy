import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items=[{id:1,name:'wangyang'},{id:2,name:'张三'},{id:3,name:'里斯'}]
  constructor() { }

  ngOnInit() {
  }
   onSave(){

   }

  displayUser(user:{id:string;name:string}) {
    return user?user.name :''
  }
}
