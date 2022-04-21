import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaFormComponent } from './organisms/pizza-form/pizza-form.component';
import { PizzaSummaryComponent } from './organisms/pizza-summary/pizza-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormComponent,
    PizzaSummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
