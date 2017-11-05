import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";
import {ProjectModule} from "./project/project.module";
import {TaskModule} from "./task/task.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
