import { Component, OnInit } from '@angular/core';
import { NavItem } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navItems: NavItem[];

  constructor() {}

  ngOnInit(): void {
    this.navItems = [
      {
        title: 'Your Workouts',
        path: ['workouts'],
      },
      {
        title: 'Add Workout',
        path: ['add'],
      },
      {
        title: 'Leaderboard',
        path: ['leaderboard'],
      },
    ];
  }
}
