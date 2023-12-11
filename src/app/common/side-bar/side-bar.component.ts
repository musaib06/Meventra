import { Component, OnInit } from '@angular/core';
import { commonVM } from 'src/app/models/commonViewModel';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  commonVM:commonVM=new commonVM()
  ngOnInit() {
    // this.commonVM.isSidebarOpen=true
   }
  toggleSidebar() {
    this.commonVM.isSidebarOpen = !this.commonVM.isSidebarOpen;
  }

}
