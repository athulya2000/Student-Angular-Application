import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
const myRoute:Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewallComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewallComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
