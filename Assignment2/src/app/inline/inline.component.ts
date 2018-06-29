import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
  <div style="text-align: center">
  <h1>
  inline works!
</h1>
</div>`,
  styles: [`
  h1
  {
    color:blue
  }
  `]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
