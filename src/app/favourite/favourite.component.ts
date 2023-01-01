import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  styles: [
    `
      .glyphicon {
        color: green;
      }
    `
  ]
})
export class FavouriteComponent {
  @Input('is-favourite') isFavourite = true;
  @Output('change') change = new EventEmitter;

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite} );
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean
}
