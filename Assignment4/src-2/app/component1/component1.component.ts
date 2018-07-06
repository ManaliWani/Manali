import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public students=[];
  constructor(private _batchservice:StudentsService ) { }

  ngOnInit() {
  }

  fetchData()
  {
    this._batchservice.GetStudentDetails()
    .subscribe(data=>this.students=data);
  }

}
