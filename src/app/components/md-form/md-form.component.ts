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
  <button (click)="ok()">Ok</button> <br>
  <button (click)="markAsTouched()">markAsTouched</button> <br>
  <button (click)="markAllAsTouched()">markAllAsTouched</button> <br>
  <button (click)="markAsUntouched()">markAsUntouched</button> <br>
  <button (click)="markAsDirty()">markAsDirty</button> <br>
  <button (click)="markAsPristine()">markAsPristine</button> <br>
  <button (click)="disable()">disable</button> <br>
  <button (click)="enable()">enable</button> <br>

  Valid:{{frm.valid}} <br>
  Form Touched:{{frm.touched}} <br>
  Name Touched:{{frm.get("name").touched}} <br>
  Address Touched:{{frm.get("address").touched}} <br>
  Country Touched:{{frm.get("address").get("country").touched}} <br>
  Form Dirty:{{frm.dirty}} <br>
  Name Touched:{{frm.get("name").dirty}} <br>
  Form Pristine:{{frm.pristine}} <br>
  Name Pristine:{{frm.get("name").pristine}} <br>
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
  markAsTouched(){
    this.frm.markAsTouched();
    this.frm.get("name").markAsTouched({onlySelf:true});
  }
  markAllAsTouched(){
    //this.frm.markAllAsTouched();
    this.frm.get("address").markAllAsTouched();
  }
  markAsUntouched(){
    this.frm.markAsUntouched();

  }
  markAsDirty(){
    this.frm.markAsDirty();

  }
  markAsPristine(){
    this.frm.markAsPristine();

  }
  disable(){
    this.frm.get("name").disable();

  }
  enable(){
    this.frm.get("name").enable();

  }
  onSubmit(){
    console.log(this.frm.value);
  }

  
}
