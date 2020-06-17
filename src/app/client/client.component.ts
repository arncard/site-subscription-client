import { Component, OnInit } from '@angular/core';
import { SiteModel } from '../_interfaces/sitemodel.model';
import { SignalRService } from '../services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  title = 'site-subscription-client';
  selectedSiteEvent: string = "";
  currentSubscription: string = "";
  subscribed: string;

  sitesList: SiteModel[] = [
    { id: 1, name: "Koala Beach", eventName: "koalabeachevent" },
    { id: 2, name: "Orange", eventName: "orangeevent" },
    { id: 3, name: "Kangaroo", eventName: "kangarooevent" },
    { id: 4, name: "Cornerstone", eventName: "cornerstoneevent" }
  ];

  constructor(public signalRService: SignalRService, private http: HttpClient) {
        
  }

  ngOnInit()
  {
    this.signalRService.startConnection();
    // this.signalRService.addSiteDataListener();
    // this.startHttpRequest();
  }

  private startHttpRequest = () => {
    // Request to subscribe
    this.http.get('https://localhost:5001/api/site')
      .subscribe(res => {
        // receives Ok "Request Completed" message from the controller
        console.log(res);
      });
  }

  subscribe()
  {    
    if(this.currentSubscription !== "")
    {
      this.signalRService.removeSiteDataListener(this.currentSubscription);
      this.subscribed = undefined;
    }

    this.currentSubscription = this.selectedSiteEvent;
    this.signalRService.addSiteDataListener(this.selectedSiteEvent);

    let selectedSite = this.sitesList.find(x=>x.eventName === this.selectedSiteEvent);
    this.subscribed = "You are subscribed to the site " + selectedSite.name;
    
    //this.signalRService.startConnection();
    
    //this.startHttpRequest();
    
  }

}
