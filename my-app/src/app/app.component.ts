import { Component } from '@angular/core';
import { Brolog } from 'brolog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  qrCode?: string;
  userName?: string;
  messageList: string[] = [];

  constructor(
    public log: Brolog,
  ) {
    log.verbose('AppComponent', 'constructor()');
  }

  onScan(event: any): void {
    this.log.verbose('AppComponent', 'onScan(%s)', JSON.stringify(event));
    this.qrCode = event.qrcode;
    this.userName = undefined;
  }

  onLogin(event: any): void {
    this.log.verbose('AppComponent', 'onLogin(%s)', JSON.stringify(event));
    this.qrCode = undefined;
    this.userName = event.name;
  }

  onHeartbeat(event: any): void {
    this.log.verbose('AppComponent', 'onHeartbeat(%s)', JSON.stringify(event));
  }

  onMessage(event: any): void {
    this.log.verbose('AppComponent', 'onMessage(%s)', JSON.stringify(event));
    if (event.text) {
      this.messageList.push(`${event.text}`);
    }
  }
}
