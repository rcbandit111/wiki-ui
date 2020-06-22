import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { ActivatePasswordComponent } from './_auth/components/activate-password/activate-password.component';
import { NewPasswordComponent } from './_auth/components/new-password/new-password.component';
import { ResetPasswordComponent } from './_auth/components/reset-password/reset-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LoginComponent } from './_auth/components/login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,

//LoginComponent,
    ActivatePasswordComponent,
    NewPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
     FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
