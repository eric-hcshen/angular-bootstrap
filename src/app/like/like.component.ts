import { Component, OnInit, Input, TestabilityRegistry } from '@angular/core';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likeCount') likeCount:number;
  @Input('isActive') isActive:boolean;

  onClick() {
    this.likeCount += (this.isActive) ? -1 : +1;
    this.isActive = !this.isActive;
  }
}
