import {NgModule, SkipSelf, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { MdIconRegistry} from '@angular/material';
import {HttpModule} from "@angular/http";
import {DomSanitizer} from "@angular/platform-browser";
import {loadSvgResources} from "./utils/svg.util";
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,ir:MdIconRegistry,ds:DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在');
    }
    //这里统一加载svg图标
    loadSvgResources(ir,ds)
  }
}
