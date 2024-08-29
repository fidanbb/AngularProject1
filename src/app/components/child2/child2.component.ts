import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  // templateUrl: './child2.component.html',
  template:`
  
  <p>child component 2 ---  {{data}}</p>
  
  `,
  styleUrl: './child2.component.scss'
})
export class Child2Component {
  @Input() data:string;
}
