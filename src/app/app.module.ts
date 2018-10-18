import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import {DishService} from './shared/services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    DishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
