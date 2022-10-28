import { AssistanceComponent } from './components/assistance/assistance.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"assist",
    component:AssistanceComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
