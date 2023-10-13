import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMenuItems = false;

  constructor() {}

  toggleNav() {
    this.showMenuItems = !this.showMenuItems;
  }
}
