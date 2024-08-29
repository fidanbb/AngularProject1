import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  //templateUrl: './parent.component.html',
  template:`
  
  <p>parent works!</p>
<!-- <app-child [childData]="data"></app-child> -->
  <!-- <app-child (dataEvent)="childEvent($event)"> </app-child> -->
  
 <div style="background-color: grey">

 <app-child (dataEvent)="childEvent($event)"></app-child>
 <hr>
  <app-child2 [data]="childMessage"></app-child2>

 </div>

  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  //data: string = "this is parent to child communication";
    childMessage:string;
  childEvent(message:string){
    this.childMessage=message;
      console.log(message);
  }
}
