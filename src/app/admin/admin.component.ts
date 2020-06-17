import { Component, OnInit } from '@angular/core';
import { SiteModel } from '../_interfaces/sitemodel.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedSiteEvent: string = "";
  messageFromApi: string;
  sitesList: SiteModel[] = [
    { id: 1, name: "Koala Beach", eventName: "koalabeachevent" },
    { id: 2, name: "Orange", eventName: "orangeevent" },
    { id: 3, name: "Kangaroo", eventName: "kangarooevent" },
    { id: 4, name: "Cornerstone", eventName: "cornerstoneevent" }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.selectedSiteEvent = "";
  }

  private startHttpRequest = () => {
    let selectedSite = this.sitesList.find(x=>x.eventName === this.selectedSiteEvent);
    // Request to subscribe
    this.http.get('https://localhost:5001/api/site/send-message/'+
                this.selectedSiteEvent+'/'+selectedSite.name)
      .subscribe((res: any) => {
        // receives Ok "Request Completed" message from the controller
        console.log(res);
        this.messageFromApi = res.message;
      });
  }

  sendMessage()
  {
    this.startHttpRequest();
  }

}
