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
  
    //two way binding <br>
     <input type="text" [(ngModel)]="name"> <br>  
    <input type="text" [(ngModel)]="name">  <br> 
      {{name}}
 
 `,

  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject1';
  name:string;
}
