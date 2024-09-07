import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  template: `
<form #frm='ngForm' (ngSubmit)="onSubmit(frm.value)">
  <input type="text" placeholder="Name" name = 'name' ngModel ><br>
  <input type="text" placeholder="Surname" name = 'surname' ngModel><br>
  <input type="email" placeholder="Email" name = 'email' ngModel><br>
  <input type="tel" placeholder="Phone" name='Phone'><br>
  <div ngModelGroup="address">
<input type="text" placeholder="Country" name="country" ngModel> <br>
<input type="text" placeholder="City" name="city" ngModel><br>
<input type="text" placeholder="address" name="address" ngModel><br>

  </div>
  <button>Send</button>
  </form>
  `,
  styleUrl: './td-form.component.scss'
})

export class TdFormComponent {

  @ViewChild("frm",{static:true}) frm: NgForm;

  onSubmit(data){
    // console.log(`Value: ${this.frm.value}`);
    // console.log(`Valid: ${this.frm.valid}`);
    // console.log(`Touched: ${this.frm.touched}`);
    // console.log(`Submitted: ${this.frm.submitted}`);
    //console.log(data);
    console.log(this.frm);
    console.log(this.frm.controls);
    console.log( this.frm.form);



    
    
 }
}
