import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

  template:`
     <!-- <h1>{{title}}<h1>    //text-intepolation - when you use the title field of appcomponent 
 class like this it is text intepolation 

    <input type="text" [value]="title"> //property binding - [] this brackets means property and this line
                       [value]="title" is property binding. this also called attribute binding 
  
                           //property binding   
    <app-home [pageName]="title"> </app-home>  -->
  
    <!-- //two way binding <br>
     <input type="text" [(ngModel)]="name"> <br>  
    <input type="text" [(ngModel)]="name">  <br> 
      {{name}} -->

      <!-- //*ngFor
      <ul>

      <li *ngFor="let name of names; let index  = index;
                                      let first=first;">{{name}}- {{index}} - {{first}}</li>
      </ul> -->

      <!-- //*nfIf
 
<div *ngIf="visible; else elseContent">hello</div>

<ng-template #elseContent> byeeee </ng-template> -->

<div appExample color="blue">
<h1>Hello</h1>
</div>





 `,

  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject1';
  //to create directive ng g d directives/directivename it generate directive in directives folder
  //if we dont want folder ng g d directivename

  // name:string;
  // names: string[] =["Andy", "Ben","Ali","Aland","Daisy","Anne"];
  // visible:boolean =false;
}
