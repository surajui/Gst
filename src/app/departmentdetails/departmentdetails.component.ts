import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent implements OnInit {
public departmetName;
  data: Object;
  suraj;
  constructor(private route:ActivatedRoute,private s:StateService) { }

  ngOnInit() {
   this.suraj= this.route.snapshot.params.id;
    //let id= +this.route.snapshot.paramMap.get('id');
    //console.log(this.route);
    // this.departmetName=id;
    this.s.getuserById(this.suraj).subscribe(u=>{this.data=u
    console.log(this.data)}
     )
  }

}
