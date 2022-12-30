import {CoursesService} from "./courses.service";
import {Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input (keyup.enter)="onKeyUp()"/>
  `
})
export class CoursesComponent {
  onKeyUp() {
   console.log("ENTER was pressed");
  }

  onDivClick() {
    console.log("Div was clicked");
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
}
