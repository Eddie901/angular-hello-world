import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from "./favourite/favourite.component";

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

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite changed to: ", eventArgs)
  }
}
