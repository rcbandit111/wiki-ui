import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/auth/components/login/login.component';
import { ActivatePasswordComponent } from './app/auth/components/activate-password/activate-password.component';
import { NewPasswordComponent } from './app/auth/components/new-password/new-password.component';
import { ResetPasswordComponent } from './app/auth/components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivatePasswordComponent,
    NewPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
