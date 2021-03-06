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
import {MatCheckboxModule, MatFormFieldModule, MatProgressSpinnerModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import {DishService} from './shared/services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {PromotionService} from './shared/services/promotion.service';
import {LeaderService} from './shared/services/leader.service';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatSliderModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import {baseURL} from './shared/const/baseurl';
import {ProcessHTTPMsgService} from './shared/services/ProcessHTTPMsg.service';
import { HighlightDirective } from './directives/highlight.directive';
import {FeedbackService} from './shared/services/feedback.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    FeedbackService,
    {provide: 'baseURL', useValue: baseURL}
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
