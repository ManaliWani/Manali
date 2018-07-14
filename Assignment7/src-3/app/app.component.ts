import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carname:string;
  carcolor:string;
  cartype:string;
  carno:string;
  seats:string;
  heading:string

  constructor()
  {
  }

  public details(CarName,CarColour,CarType,CarNo,Seats)
  {
    this.heading="Car Details";
    this.carname = "Car Name is     : "+CarName;
    this.carcolor= "Car Colour      : "+CarColour;
    this.carno   = "Car Number      : "+CarNo;
    this.seats   = "Number of Seats : "+Seats;
    this.cartype = "Car Type        : "+CarType;
  }
}
