import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-md-form',
  template:`
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name">  <br>
      <input type="text" placeholder="Surname" formControlName="surname">  <br>
      <input type="email" placeholder="Email" formControlName="email">  <br>
      <input type="tel" placeholder="Tel" formControlName="tel">  <br>

      <div formGroupName="address">
      <input type="text" placeholder="Country" formControlName="country"><br>
        <input type="text" placeholder="City" formControlName="city"><br>
        <input type="text" placeholder="Address" formControlName="address"><br>
      </div>
      <button >Send</button>
  </form>
<br>
<br>
  <button (click)="ok()">Ok</button>
  Valid:{{frm.valid}}
  `,
  styleUrl: './md-form.component.scss'
})
export class MdFormComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
this.frm=formBuilder.group({
  name:["",Validators.required],
  surname:[""],
  email:[""],
  tel:[""],
  address: formBuilder.group({
    country:[""],
    city:[""],
    address:[""]
    })
  })

  this.frm.valueChanges.subscribe({
    next:data=>{
      console.log(data);
    }
  }) 

  this.frm.get("name").statusChanges.subscribe({
    next:data=>{
      console.log(data);
    }
  }) 

  }
  ok(){
    this.frm.get("name").setValue("Fidan",{onlySelf:true})
  }
  onSubmit(){
    console.log(this.frm.value);
  }

  
}
