import { TypeModifier } from '@angular/compiler';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomifDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef   //after giving these two now this directive is structural directive
  ) { }

  @Input() set appCustomif(value: boolean) //name must be same as selector's name
  {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
}
