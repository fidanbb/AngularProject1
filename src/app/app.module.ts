import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { ExampleComponent } from './components/example/example.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { MdFormComponent } from './components/md-form/md-form.component';
import { ProductService } from './productservice';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    CustomPipe,
    ParentComponent,
    ChildComponent,
    Child2Component,
    ExampleComponent,
    TdFormComponent,
    MdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ProductService,  //inject productService 
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
