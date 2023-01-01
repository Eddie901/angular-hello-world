import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoursesComponent} from "./courses.component";
import {FavouriteComponent} from "./favourite/favourite.component";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
