import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public studName="";
  public email="";
  public address="";
  public gender="";
  public mobileNo;
  public clgName="";
  public batchName="";
  constructor() { }

  ngOnInit() {
  }

  public getData(studName,Gender,MNo,clgName,email,bName)
  {
    console.log(studName);
    console.log(Gender);
    console.log(MNo);
    console.log(clgName);
    console.log(email);
    console.log(bName);
  }

}
