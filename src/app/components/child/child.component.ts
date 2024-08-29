import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  //templateUrl: './child.component.html',
  template:`
<!-- <div style="background-color: grey;">
<p>child works!</p>
{{childData}}
</div> -->

<p>child component</p>


  `,
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  @Output() dataEvent: EventEmitter<any>
  =new EventEmitter();

   ngOnInit(): void {
   this.dataEvent.emit("Hello");
   }
   //@Input() childData:any;

  
}
