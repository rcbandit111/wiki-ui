import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from './material/material.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_auth/components/login/login.component';
import { ActivatePasswordComponent } from './_auth/components/activate-password/activate-password.component';
import { NewPasswordComponent } from './_auth/components/new-password/new-password.component';
import { ResetPasswordComponent } from './_auth/components/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivatePasswordComponent,
    NewPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
