import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  users: any[] = [
    {id:'01', name: 'John',email:'John@gmail.com' },
   { id:'02',name: 'Jane',email:'jane@gmail.com' },
   {id:'03',name: 'Mario',email:'mario@gmail.com' },
   {id:'04',name: 'suraj',email:'suraj@gmail.com' },
   {id:'05',name: 'varsha',email:'varsha@gmail.com' },
   {id:'06',name: 'nellima',email:'nellima@gmail.com' },
   {id:'07',name: 'prasana',email:'prasana@gmail.com' }
  ];
  search: any = { name: '' };
  constructor() { }

  ngOnInit() {
  }

}
