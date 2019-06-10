import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [`
  .glypicon {
    color: green;
  }
  .glypicon-start {
    color: black;
  }
  `]
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
