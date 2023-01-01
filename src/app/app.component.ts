import {Component} from '@angular/core';
import {LikeChangedEventArgs} from "./like/like.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  tweet = {
    body: "I'm twittering",
    isLiked: false,
    likesCount: 0
  }

  onLikeChanged(eventArgs: LikeChangedEventArgs) {
    console.log("Likes changed to: ", eventArgs)
  }
}
