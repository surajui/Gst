import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  result;  
  constructor(private route:Router,private s:StateService) { }
   
  ngOnInit() {
  this.s.getuser().subscribe(u=>{this.result=u})
  }
  // select(c){
  //   this.route.navigate(['/department',c.id])
  // }
}
