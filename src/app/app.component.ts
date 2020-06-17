import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';
import { SiteModel } from './_interfaces/sitemodel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'site-subscription-client';
  // selectedSiteEvent: string = "";

  // sitesList: SiteModel[] = [
  //   { id: 1, name: "Koala Beach", eventName: "koalabeachevent" },
  //   { id: 2, name: "Orange", eventName: "orangeevent" },
  //   { id: 3, name: "Kangaroo", eventName: "kangarooevent" },
  //   { id: 4, name: "Cornerstone", eventName: "cornerstoneevent" }
  // ];

  constructor() {
        
  }

  ngOnInit()
  {
    // this.signalRService.startConnection();
    // this.signalRService.addSiteDataListener();
    // this.startHttpRequest();
  }

  // private startHttpRequest = () => {
  //   // Request to subscribe
  //   this.http.get('https://localhost:5001/api/site')
  //     .subscribe(res => {
  //       // receives Ok "Request Completed" message from the controller
  //       console.log(res);
  //     });
  // }

  // subscribe()
  // {
  //   this.signalRService.startConnection();
  //   this.signalRService.addSiteDataListener(this.selectedSiteEvent);
  //   //this.startHttpRequest();
  // }
}
