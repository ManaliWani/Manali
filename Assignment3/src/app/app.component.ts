import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str="hello";
  clickMessage=" Marvellous Infosystems"
  public fun()
  {
    return "Inside fun";
  }
  public onClick()
  {
    this .clickMessage=" Button Clicked";
  }

}
