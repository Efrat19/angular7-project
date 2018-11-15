import { Directive, ElementRef,Renderer2,Input,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appSelectbox]'
})
export class SelectboxDirective {
 dirty:string='gold';
@HostBinding('style.backgroundColor') bgColor:string='transparent';
// constructor(private el:ElementRef,private renderer:Renderer2) { };

@HostListener('change')onchange(){
  this.bgColor=this.dirty;
};
}