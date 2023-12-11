import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ClassesComponent } from './main/classes/classes.component';
import { LearningComponent } from './main/learning/learning.component';
import { SettingComponent } from './main/setting/setting.component';
import { ResourcesComponent } from './main/resources/resources.component';
import { ChatComponent } from './main/chat/chat.component';


const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"classes",component:ClassesComponent},
  {path:"learning",component:LearningComponent},
  {path:"resources",component:ResourcesComponent},
  {path:"chat",component:ChatComponent},
  {path:"settings",component:SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
