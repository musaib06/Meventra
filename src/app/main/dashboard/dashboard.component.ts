import { Component, OnInit } from '@angular/core';
import { dashboardData, userData } from 'src/app/models/dashboard-model';
import { DashboardService } from 'src/app/service/dashboard.service';
interface Udata {
  fullName: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  userDataObj: userData = new userData();
  username: string = '';
  dashboardModelObject: dashboardData = new dashboardData();
  userArrayNew: any;
  reminderArray: any;

  ngOnInit(): void {
    this.getDashboardData();
  }
/**
 * Get api Using Service
 * Integrated Api Data and Binded Data
 * e.g latest results, userdata,days
 * Created separate data model ts file to define classes
 */
  async getDashboardData() {
    try {
      this.dashboardService.getDashboardData().subscribe((data) => {
        this.userArrayNew = data.dashboardData.userData;
        let lastestResults = data.dashboardData.lastestResults;
        let averagePercentagesObj =data.dashboardData.timeSpentData.averagePercentagesObj;
        let averagePercentages = data.dashboardData.timeSpentData.averagePercentages;
        let days = data.dashboardData.timeSpentData.days;
        let monday = data.dashboardData.timeSpentData.days.monday;
        let tuesday = data.dashboardData.timeSpentData.days.tuesday;
        let wednesday = data.dashboardData.timeSpentData.days.wednesday;
        let thursday = data.dashboardData.timeSpentData.days.thursday;
        let friday = data.dashboardData.timeSpentData.days.friday;
        let saturday = data.dashboardData.timeSpentData.days.saturday;
        let sunday = data.dashboardData.timeSpentData.days.sunday;
        //Initialized Variables in defined class objects
        this.dashboardModelObject.timeSpentDataObject.days = days;
        this.dashboardModelObject.timeSpentDataObject.days.mondayObj = monday;
        this.dashboardModelObject.timeSpentDataObject.days.tuesdayObj = tuesday;
        this.dashboardModelObject.timeSpentDataObject.days.wednesdayObj =wednesday;
        this.dashboardModelObject.timeSpentDataObject.days.thursdayObj =thursday;
        this.dashboardModelObject.timeSpentDataObject.days.fridayObj = friday;
        this.dashboardModelObject.timeSpentDataObject.days.saturdayObj =saturday;
        this.dashboardModelObject.timeSpentDataObject.days.sundayObj = sunday;
        let userCourceData = data.dashboardData.userData;
        this.dashboardModelObject.userDataArray = userCourceData;
        this.dashboardModelObject.lastestResultsArray = lastestResults;
        this.dashboardModelObject.timeSpentDataObject.averagePercentagesObj =averagePercentagesObj;
        this.dashboardModelObject.timeSpentDataObject.averagePercentagesObj =averagePercentages;
        // iterate values to get user Data from array
        this.dashboardModelObject.userDataArray =
          data.dashboardData.userData.forEach((item: any) => {
            this.dashboardModelObject.userDataObj.username = item.username;
            this.dashboardModelObject.userDataObj.email = item.email;
            this.dashboardModelObject.userDataObj.fullName = item.fullName;
            this.reminderArray = item.reminders;
            this.dashboardModelObject.userDataObj = item.courses;
          });
      });
    } catch (error) {
      console.log(error);
    }
  }
  getColor(score: string): string {
    if (score < '50') {
      return '#2ed8b6';
    } else if (score >= '50' && score < '75') {
      return '#4099ff';
    } else {
      return '#4099ff';
    }
  }
  getCustomColor(percentage: number): string {
    if (percentage < 10) {
      return '#2ed8b6';
    } else if (percentage < 15) {
      return '#4099ff';
    } else if (percentage > 20) {
      return '#ee5f5b';
    } else if (percentage > 25) {
      return 'teal';
    } else {
      return '#FFB64D';
    }
  }
}
