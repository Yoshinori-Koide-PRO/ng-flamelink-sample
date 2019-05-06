import { Injectable, Inject } from '@angular/core';
import * as firebase from 'firebase';
import * as flamelink from 'flamelink';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FlamelinkService {

  // GET|SET flApp
  private flApp: flamelink.App;
  get FlApp(): flamelink.App {
    return this.flApp;
  }
  set FlApp(value: flamelink.App) {
    this.flApp = value;
  }

  constructor(@Inject(FirebaseApp) private fb: firebase.app.App) {
    const config: flamelink.Config = {
      firebaseApp: this.fb,
      env: 'production',
      locale: 'en-US',
      dbType: 'cf'
    };
    this.FlApp = flamelink(config);
  }

  getApp() {
    return this.FlApp;
  }
}
