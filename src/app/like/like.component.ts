import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styles: [
    `
      .glyphicon {
        color: deeppink;
      }

      .glyphicon-star {
        color: #ccc;
      }
    `
  ]
})

export class LikeComponent {

  @Input('likes-count') likesCount = 0;
  @Input('is-liked') isSelected = true;
  @Output('custom-like') change = new EventEmitter;

  onClick() {
    this.likesCount += (this.likesCount) ? -1 : 1;
    this.isSelected = !this.isSelected
    this.change.emit({newValue: this.isSelected});
    this.display();

  }

  display() {
    console.log(this.likesCount + ' likes ' + this.selected());
  }

  private selected() {
    if (this.isSelected)
      return 'selected';

    return 'not selected';
  }
}

export interface LikeChangedEventArgs {
  newValue: boolean
}

