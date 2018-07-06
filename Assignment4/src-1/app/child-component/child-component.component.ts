import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  @Input() public parentData;
  @Output() public MyEvent = new EventEmitter();
  public message

  constructor() { }

  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello from child');
  }
  ngOnInit() {
  }

}

