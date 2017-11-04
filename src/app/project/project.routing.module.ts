import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectListComponent} from "./project-list/project-list.component";

const projectRoutes:Routes=[
  {path:'project',component:ProjectListComponent}
]
@NgModule({
  imports:[RouterModule.forChild(projectRoutes)],
  exports:[RouterModule]
})
export class  ProjectRoutingModule{

}
