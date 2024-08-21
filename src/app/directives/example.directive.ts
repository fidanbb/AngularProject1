import { Directive, ElementRef, OnInit,Input, HostListener, HostBinding } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appExample]' //it is reference in program level that enables to use directive

  //if selector is written in brackets [] -> [appExample] this means it will be used as attribute
  //if selecter is written with . -> .appExample this means it will be used as a class
  //host listener it is a decorator that allows us to determine which event 
  //the created directive is assigned to.
  //host binding -We can perform operations by binding to a property of the 
  //dom object pointed by the directive.

})
export class ExampleDirective
implements OnInit {

  constructor(
    private element: ElementRef
  ) { 

   
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor=this.color;

    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }

  @Input() color:string;
  @HostListener("click")
  onClick(){
    alert("Html object clicked")
  }

  @HostBinding("style.Color")
    writingColor:string = "red";
}
