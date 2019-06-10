import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title') title:string;
  test = 'Test Here';
  isExpend:boolean;
  constructor() { }
  onClick() {
    this.isExpend = !this.isExpend;
  }

}
