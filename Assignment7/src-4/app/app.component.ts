import { Component } from '@angular/core';

export interface PeriodicElement {
  Authorname: string;
  NumberOfPages: number;
  Price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Authorname: 'Korth', NumberOfPages:500,Price:1000},
  {Authorname: 'Horowitz Sahani', NumberOfPages:750,Price:600},
  {Authorname: 'Gautam Shroff', NumberOfPages:300,Price:400},
  {Authorname: 'Dennis Ritchie', NumberOfPages:250,Price:450},
  {Authorname: 'Behrouz A. Forouzan', NumberOfPages:1270,Price:900}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['Authorname', 'NumberOfPages', 'Price'];
  dataSource = ELEMENT_DATA;
  constructor()
  {
  }
}
