import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private object:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.settextcolor('red');
  }
  @HostListener('mouseleave') onmouseleave()
  {
    this.settextcolor('black');
  }

  settextcolor(color:string)
  {
    this.object.nativeElement.style.color=color;
  }
}
