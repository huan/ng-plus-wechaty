import { Component } from '@angular/core';
import { Brolog } from 'brolog';

import { ToxicityService } from './toxicity.service';

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

  green = false;
  red = false;

  constructor(
    public log: Brolog,
    private toxicity: ToxicityService,
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

  async onMessage(event: any): Promise<void> {
    this.log.verbose('AppComponent', 'onMessage(%s)', JSON.stringify(event));
    if (event.text) {
      this.messageList.push(`${event.text}`);

      const isToxicity = await this.toxicity.classify(event.text);
      this.red = isToxicity;
      this.green = !isToxicity;
    }
  }
}
