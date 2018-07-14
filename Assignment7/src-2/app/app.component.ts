import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date:string;

  cities: String[];

   

  constructor()
  {
    this.cities=['Pune','Mumbai','Banglore','Chennai','Aurangabad','Ahmednagar'];
  }
}
