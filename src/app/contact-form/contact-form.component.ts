import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'eMail'},
    {id: 2, name: 'Phone'}
  ];
  constructor() { }
  log(x) {
    console.log(x);
  }
  onSubmit(f) {
    console.log(f);
  }
}
