import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaFormComponent } from './organisms/pizza-form/pizza-form.component';
import { PizzaSummaryComponent } from './organisms/pizza-summary/pizza-summary.component';
import { PanesCollectionComponent } from './organisms/panes-collection/panes-collection.component';
import { MainSiteComponent } from './templates/main-site/main-site.component';
import { PizzaPaneComponent } from './molecules/pizza-pane/pizza-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormComponent,
    PizzaSummaryComponent,
    PanesCollectionComponent,
    MainSiteComponent,
    PizzaPaneComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
