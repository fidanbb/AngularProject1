import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:"root"
    }
)   


export class ProductService{
    getProducts():Product[]{
       return [

         {name:"Keyboard",quantity:20},
         {name:"Mouse",quantity:15},
         {name:"Pencil",quantity:25},
         {name:"Laptop",quantity:30},

       ];
    }
}

export class Product{
    name:string;
    quantity:number;
}