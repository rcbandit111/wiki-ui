import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSnackBarService, NotificationTypeEnum }
  from 'src/app/_auth/services/mat-snack-bar.service';
import {   Directive,OnInit, EventEmitter, Output, OnDestroy, Input,ElementRef,Renderer } from '@angular/core';

//paste inside declaration
@NgModule({
  declarations: [LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,

    FormsModule,
    MaterialModule,
  ],
  exports: [

  ],
  entryComponents: [

  ],
  providers: [
    MatSnackBarService,

  ]
})
export class LoginModule {

 }
