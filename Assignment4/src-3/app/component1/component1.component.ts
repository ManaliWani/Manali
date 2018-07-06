import { Component, OnInit } from '@angular/core';    
import { BookService } from '../book.service';  

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit 
{
  public bookInfo=[];
constructor(private book:BookService){}

ngOnInit()
{}

passDetails()
{
  this.bookInfo=this.book.GetBookDetails();
}
}



