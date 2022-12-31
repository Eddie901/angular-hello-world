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

  onFavouriteChanged(isFavourite: any) {
    console.log("Favourite changed to: " + isFavourite)
  }
}
