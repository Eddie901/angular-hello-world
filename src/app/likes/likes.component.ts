import {Component, Input} from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent {
  @Input('likesCount') likesCount: number = 0;
  @Input('isActive') isActive: boolean = true;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive
  }
}
