import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template:`
  <p>
      Inside inline code
  </p>
  `,
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
