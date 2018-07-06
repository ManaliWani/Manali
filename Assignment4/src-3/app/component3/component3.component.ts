import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public bookInfo=[];
  constructor(private book:BookService) { }

  ngOnInit() {
  }

  passDetails()
  {
    this.bookInfo=this.book.GetBookDetails();
  }

}
