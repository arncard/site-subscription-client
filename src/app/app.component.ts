import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'site-subscription-client';

  constructor(public signalRService: SignalRService, private http: HttpClient) {
        
  }

  ngOnInit()
  {
    this.signalRService.startConnection();
    this.signalRService.addSiteDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    // Request to subscribe
    this.http.get('https://localhost:5001/api/site')
      .subscribe(res => {
        // receives Ok "Request Completed" message from the controller
        console.log(res);
      });
  }
}
