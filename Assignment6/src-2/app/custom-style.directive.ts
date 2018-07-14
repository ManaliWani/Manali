import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private object:ElementRef) 
  {
    this.object.nativeElement.style.background='yellow';
    //this.object.nativeElement.style.background='red';
  }

  setTextColor(color:String)
  {
    
  }

}
