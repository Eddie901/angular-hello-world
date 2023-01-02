import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: false
  }
}
