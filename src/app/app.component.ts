import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shipping = {
    title: "Shipping details",
    content: "Shipping details content"
  }
  billing = {
    title: "Billing details",
    content: "Billing details content"
  }


}
