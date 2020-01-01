import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  empList=[]
  constructor(private fb:FormBuilder,private s:StateService) { }
  edit:FormGroup;
  stateInfo: any[] = [];
  cityInfo: any[] = [];
  countryInfo: any[] = []; 
  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
  }
  ngOnInit() {
    this.edit = this.fb.group({
      selecte:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required],
      district:['',Validators.required],
      panname:['',Validators.required],
      tan:['',Validators.required]
    });
    
    this.s.allCountries().subscribe(res=>{
      this.empList=res.Countries;
      console.log(this.empList)
    })
   }
  public suraj="";
  setvalue(drp:any){
    this.suraj=drp.target.value;
  }
  onChangeCountry(countryValue) {
    this.stateInfo=this.empList[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }
  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
  }

}
