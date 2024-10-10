import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { capitalLetterValidator, matchPassword } from '../../validators/func';


@Component({
  selector: 'app-md-form',
  template:`
    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" placeholder="Name" formControlName="name">  <br>
      <div *ngIf="!name.valid && (name.dirty || name.touched)">
        {{ name.errors | json }} 
     </div>
      <input type="text" placeholder="Surname" formControlName="surname">  <br>
      <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">
        {{surname.errors | json}}
      </div>
      <input type="email" placeholder="Email" formControlName="email">  <br>
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        {{email.errors | json}}
      </div>
      <input type="tel" placeholder="Tel" formControlName="tel">  <br>

   
  <input type="text" placeholder="Password" formControlName="password"><br>
  <div *ngIf="!password.valid && (password.dirty || password.touched)">
    {{ password.errors | json }} 
  </div>
  <input type="text" placeholder="ConfirmPassword" formControlName="cpassword"><br>
  <div *ngIf="!cpassword.valid && (cpassword.dirty || cpassword.touched)">
    {{ cpassword.errors | json }}
  </div>


      <div formGroupName="address">
      <input type="text" placeholder="Country" formControlName="country"><br>
        <input type="text" placeholder="City" formControlName="city"><br>
        <input type="text" placeholder="Address" formControlName="address"><br>
      </div>
      <button >Send</button>
  </form>
<br>
<br>

  <!-- <button (click)="ok()">Ok</button> <br>
  <button (click)="markAsTouched()">markAsTouched</button> <br>
  <button (click)="markAllAsTouched()">markAllAsTouched</button> <br>
  <button (click)="markAsUntouched()">markAsUntouched</button> <br>
  <button (click)="markAsDirty()">markAsDirty</button> <br>
  <button (click)="markAsPristine()">markAsPristine</button> <br>
  <button (click)="disable()">disable</button> <br>
  <button (click)="enable()">enable</button> <br> -->

  <!-- Valid:{{frm.valid}} <br>
  Form Touched:{{frm.touched}} <br>
  Name Touched:{{frm.get("name").touched}} <br>
  Address Touched:{{frm.get("address").touched}} <br>
  Country Touched:{{frm.get("address").get("country").touched}} <br>
  Form Dirty:{{frm.dirty}} <br>
  Name Touched:{{frm.get("name").dirty}} <br>
  Form Pristine:{{frm.pristine}} <br>
  Name Pristine:{{frm.get("name").pristine}} <br> -->


  `,
  styleUrl: './md-form.component.scss'
})
export class MdFormComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
this.frm=formBuilder.group({
  name:["",[Validators.required,Validators.minLength(3),capitalLetterValidator(3 )]],
  surname:["",Validators.required],
  email:["",[Validators.required,Validators.email]],
  tel:[""],
  password:["",Validators.required],
  cpassword:["",Validators.required],
  address: formBuilder.group({
    country:[""],
    city:[""],
    address:[""]
    }),
  
  },{validators:[matchPassword()]});

  // this.frm.valueChanges.subscribe({
  //   next:data=>{
  //     console.log(data);
  //   }
  // }) 

  // this.frm.get("name").statusChanges.subscribe({
  //   next:data=>{
  //     console.log(data);
  //   }
  // }) 


}

get name(){
  return this.frm.get("name");
}

get surname(){
  return this.frm.get("surname");
}

get email(){
  return this.frm.get("email");
}

get tel(){
  return this.frm.get("tel");
}

get password(){
  return this.frm.get('password');}
get cpassword(){
  return this.frm.get('cpassword');
}

onSubmit(){
  console.log(this.frm.valid);
  console.log(this.frm.value);
}
  // ok(){
  //   this.frm.get("name").setValue("Fidan",{onlySelf:true})
  // }
  // markAsTouched(){
  //   this.frm.markAsTouched();
  //   this.frm.get("name").markAsTouched({onlySelf:true});
  // }
  // markAllAsTouched(){
  //   //this.frm.markAllAsTouched();
  //   this.frm.get("address").markAllAsTouched();
  // }
  // markAsUntouched(){
  //   this.frm.markAsUntouched();

  // }
  // markAsDirty(){
  //   this.frm.markAsDirty();

  // }
  // markAsPristine(){
  //   this.frm.markAsPristine();

  // }
  // disable(){
  //   this.frm.get("name").disable();

  // }
  // enable(){
  //   this.frm.get("name").enable();

  // }
 

  
}
