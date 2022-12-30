import {CoursesService} from "./courses.service";
import {Component} from "@angular/core";

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    <img [src]="imageUrl"/>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CoursesComponent {
  isActive = false;
  imageUrl = "";
  colSpan = 2;
}
