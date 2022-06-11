import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    LoggedInRoutingModule
  ]
})
export class LoggedInModule { }
