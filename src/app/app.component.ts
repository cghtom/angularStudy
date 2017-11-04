import { Component } from '@angular/core';
import {OverlayContainer} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false
  constructor(private oc:OverlayContainer){}

  switchTheme(checked:boolean){
    this.darkTheme=checked
    //为了让dialog也保持主题 这里属于全局设置
    this.oc.themeClass=checked?"myapp-dark-theme":null
  }
}
