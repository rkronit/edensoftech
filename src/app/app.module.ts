import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AssistanceComponent } from './components/assistance/assistance.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
     DashboardComponent,
     
     ContactUsComponent,
     AssistanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
