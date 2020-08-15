import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule} from './material/material.module'; 
=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivatePasswordComponent } from './_auth/components/activate-password/activate-password.component';
import { NewPasswordComponent } from './_auth/components/new-password/new-password.component';
import { ResetPasswordComponent } from './_auth/components/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations;
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AuthInterceptor } from './_auth/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
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

    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
