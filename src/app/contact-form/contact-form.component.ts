import {Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods= [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},
  ]
  submit(x: any) {
    console.log(x);
    console.log(x.value);
  }
}
