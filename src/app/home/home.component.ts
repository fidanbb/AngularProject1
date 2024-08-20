import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',

  template:`
  <h3>{{pageName}}<h3>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
@Input() pageName: string ;
}
