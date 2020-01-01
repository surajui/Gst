import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http:HttpClient) { }
  url='https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json';



  allCountries():Observable<any>{
    return this.http.get(this.url)
  }
  getuser(){
    return this.http.get('http://localhost:3200/posts');
  }
  getuserById(id:number){
    return  this.http.get('http://localhost:3200/posts/'+id)
  }
}
