import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  isExpanded = true;
  @Input('title') title: string = "Title";
  @Input('content')content: string = "Content";

  toggle() {
    this.isExpanded = !this.isExpanded

    console.log("isExpanded is " + this.isExpanded)
  }

}
