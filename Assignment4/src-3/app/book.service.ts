import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export class BookService 
{
constructor() { }

GetBookDetails()
{
  return [
    { "Name" : "C Programming","Price" :500 , "Author" : "Ajay Mittal" , "Pages" : 50 + " Pgs." },
    { "Name" : "C++ Programming" , "Price" : 1000 , "Author" : "Bruce Eckel" , "Pages" : 100 + " Pgs."}
        ];
}

}
