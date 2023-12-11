import { Component } from '@angular/core';
import { commonVM } from './models/commonViewModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maventra-test';
  currentDate: Date = new Date();
  // isSidebarOpen: boolean = false;
  constructor() {

   }
   commonVM:commonVM=new commonVM()
  ngOnInit() {
    this.commonVM.isSidebarOpen=true
   }
  toggleSidebar() {
    this.commonVM.isSidebarOpen = !this.commonVM.isSidebarOpen;
  }
}
