import {AuthorsService} from "../authors.service";
import {Component} from "@angular/core";

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
