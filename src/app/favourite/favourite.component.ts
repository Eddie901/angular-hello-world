import { Component } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  isFavourite =  true;

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
