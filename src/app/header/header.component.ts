import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showNav = false;

  constructor() {}
  toggleNav = () => {
    this.showNav = !this.showNav;
  };

  ngOnInit(): void {}
}
