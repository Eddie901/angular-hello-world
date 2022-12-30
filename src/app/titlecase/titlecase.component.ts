import {Component} from '@angular/core';

@Component({
  selector: 'titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.scss']
})
export class TitlecaseComponent {
  title = "";

  onKeyUp() {
    console.log("ENTER was pressed");
    console.log(this.title);
  }


}
