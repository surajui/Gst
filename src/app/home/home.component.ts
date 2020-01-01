import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  edit:FormGroup;
  constructor(private fb:FormBuilder) { }
  get suraj(){
     return this.edit.get('addresses') as FormArray
  }
  ngOnInit() {
    this.edit=this.fb.group({
      firstn:['',Validators.required],
      email:['',Validators.required],
      passwrd:['',Validators.required],
      addresses:this.fb.array([this.fb.group({
        city:['',Validators.required],
       state:['',Validators.required]
      })])
      
    })
  }
  add() {
    (this.edit.controls.addresses as FormArray).push(this.fb.group({
    city:['',Validators.required],
    state:['',Validators.required]
    }))
    }
   
    deleteRow(index: number) {
      this.suraj.removeAt(index);
    
    }
}
