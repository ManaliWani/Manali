import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  uname:string;
  password:string;
  str:string;
  pass:string;

  public fun(username,password)
  {
    this.uname=username;
    this.password=password;
    this.str="Your User Name is ";
    this.pass="Your Password is ";
  }
}
