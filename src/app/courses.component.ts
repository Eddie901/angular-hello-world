import {CoursesService} from "./courses.service";
import {Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  `
})
export class CoursesComponent {

  email = "me@example.com";

  onKeyUp() {
   console.log("ENTER was pressed");
   console.log(this.email);
  }

  onDivClick() {
    console.log("Div was clicked");
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
}
