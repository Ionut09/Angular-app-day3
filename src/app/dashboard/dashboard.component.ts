import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  path = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleNavigationClick(event: any, pathValue: string) {
    if (this.path === pathValue) {
      this.path = '';
    } else {
      this.path = pathValue;
    }
  }

  applySelectedElementStyle(pathValue: string) {
    const style = {};
    if (this.path === pathValue) {
      style['color'] = 'red'; // DUBIOS, deci daca nu exista cheia color, o creaza automat !!!!!!!!!!!
    } else {
      style['color'] = 'blue';
    }
    return style;
  }
}
