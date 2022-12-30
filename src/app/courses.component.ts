import {CoursesService} from "./courses.service";
import {Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
  `
})
export class CoursesComponent {
  onKeyUp(email: string) {
   console.log("ENTER was pressed");
   console.log(email);
  }

  onDivClick() {
    console.log("Div was clicked");
  }

  onSave($event: any) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
}
