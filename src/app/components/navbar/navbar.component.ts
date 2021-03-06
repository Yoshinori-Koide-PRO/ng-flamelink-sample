import { Component, OnInit } from '@angular/core';
import { FlamelinkService } from '../../shared/services/flamelink.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: any[];

  constructor(private fl: FlamelinkService) { }

  ngOnInit() {
    this.fl.getApp().nav.subscribe({
      navigationKey: 'main',
      callback : (error, menu) => {
      if (error) {
        return console.error('Something went wrong while retrieving the entry. Details:', error);
      }

      console.log('The menu object:', menu);
      this.navItems = Object.keys(menu.items).map(key => menu.items[ key ]);
    }});
  }

}
