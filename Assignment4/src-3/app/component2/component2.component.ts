import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public bookInfo=[];
  constructor(private book:BookService) { }

  ngOnInit() {
  }

  passDetails()
  {
    this.bookInfo=this.book.GetBookDetails();
  }

}
