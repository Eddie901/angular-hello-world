import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: "Post title",
    isFavourite: false
  }

  onFavouriteChanged() {
    console.log("Favourite changed")
  }
}
