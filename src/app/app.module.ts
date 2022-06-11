import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
