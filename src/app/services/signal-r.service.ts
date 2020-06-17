import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { SiteModel } from '../_interfaces/sitemodel.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  // It holds the data fetched from the server  
  public data: SiteModel[] = [];
  receivedMessage: string = "";
  public broadcastedData: SiteModel[];

  private hubConnection: signalR.HubConnection;

  
  public dataListChange = new BehaviorSubject<SiteModel[]>(this.data);
  dataListChange$ = this.dataListChange.asObservable();

  // Stablish a connection
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/site')
    .build();

    this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch(err => console.log('Error while starting connection: ' + err))
  }

  // subscribe to the transfercalendardata event and accept the 
  // data from the server with the data parameter
  public addSiteDataListener = () => {
    // connection.on runs when server-side code calls it using the Send method
    this.hubConnection.on('transfersitemessage', (message) => {
      //this.receivedMessage = message;
      //this.data = data;
      console.log("Transferred message");
      console.log(message);
    })
  }
}
