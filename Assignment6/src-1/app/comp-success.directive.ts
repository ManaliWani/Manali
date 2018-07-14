import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private object:ElementRef) { }


  setTextColot(color:string)
  {
    this.object.nativeElement.style.color=color;
  }
  
  @HostListener('mouseenter') onmouseenter()
  {
    this.setTextColot('green')
  }
  
  @HostListener('mouseleave') onmouseleave()
  {
    this.setTextColot('black')
  }

}
