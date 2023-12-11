import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import{HttpClientModule} from '@angular/common/http'
import { ClassesComponent } from './main/classes/classes.component';
import { LearningComponent } from './main/learning/learning.component';
import { ResourcesComponent } from './main/resources/resources.component';
import { ChatComponent } from './main/chat/chat.component';
import { SettingComponent } from './main/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    ClassesComponent,
    LearningComponent,
    ResourcesComponent,
    ChatComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
