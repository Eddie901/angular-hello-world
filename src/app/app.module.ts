import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from "./courses.component";
import {FavouriteComponent} from "./favourite/favourite.component";
import {InputFormatDirective} from './input-format.directive';
import {LikesComponent} from './likes/likes.component';
import {ZippyComponent} from './zippy/zippy.component';
import {TitlecaseComponent} from "./titlecase/titlecase.component";
import {TitleizePipe} from "./titleize.pipe";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    InputFormatDirective,
    LikesComponent,
    TitlecaseComponent,
    ZippyComponent,
    TitleizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
