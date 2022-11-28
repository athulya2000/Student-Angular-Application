import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
 name=""
 rollNo=""
 admissionNumber=""
 mobilenumber=""
 college=""
 parentName=""
 parentPhonenumber=""
 username=""
 password=""

 readValues=()=>
 {
  let data:any={"name":this.name,"rollNo":this.rollNo,"admissionNumber":this.admissionNumber,"mobilenumber":this.mobilenumber,"college":this.college,"parentName":this.parentName," parentPhonenumber":this.parentPhonenumber," username":this.username,"password":this.password}
  console.log(data)
 }
}
