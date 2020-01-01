import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { StateService } from './state.service';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ContactComponent } from './contact/contact.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DepartmentComponent,
    DepartmentdetailsComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    AppRoutingModule,HttpClientModule,FilterPipeModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
