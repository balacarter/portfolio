import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { ActnowComponent } from './projects/actnow/actnow.component';
import { MainViewComponent } from './main/main-view/main-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from './projects/actnow/survey/survey.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { MeComponent } from './main/me/me.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ContactComponent } from './main/contact/contact.component';
import { ContactService } from './main/contact/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    ActnowComponent,
    MainViewComponent,
    SurveyComponent,
    MeComponent,
    ScrollDirective,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    NgbModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [ContactService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
