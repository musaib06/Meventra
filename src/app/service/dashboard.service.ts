import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dashboardData } from '../models/dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) {
  }

   getDashboardData(){
    return this.http.get<any>('https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126')
   }
}
