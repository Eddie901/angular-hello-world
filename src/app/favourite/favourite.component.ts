import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  @Input() isFavourite = true;

  ngOnInit() {
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
