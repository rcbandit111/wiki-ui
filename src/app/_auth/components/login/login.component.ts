
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarService, NotificationTypeEnum }
from 'src/app/_auth/services/mat-snack-bar.service';
import { isNullOrUndefined } from 'util';
import { HttpClient } from '@angular/common/http';

import { MaterialModule } from 'src/app/shared/material/material.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  // private returnUrl: string;
  private deviceInfo = null;
  private ipAddress = '';
  private location = '';
  private isMobilevar = false;
  private isTabletvar = false;
  private isDesktopvar = false;
  randomImgURL: any;
  language:string;

  constructor(
    private fb: FormBuilder,
   // private route: ActivatedRoute,
    private router: Router,
    private _snackbarService: MatSnackBarService,

    private http: HttpClient

  ) {

  }

  async ngOnInit ()
  {
    this.form = this.fb.group( {
      username: [ '', Validators.email ],
      password: [ '', Validators.required ],
    } )
  }
 async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {

        const username = this.form.get('username').value;
      const password = this.form.get( 'password' ).value;
      debugger
        // this._authService.login(username, password).subscribe((response) => {
        //   console.log(response);
        //   if( response.Status==0){
        //     // this._snackbarService.openSnack(
        //     //   response.Message,
        //     //   NotificationTypeEnum.Success
        //     // );
        //     this.router.navigate(['/aepistle/home']);
        //   }
        //   else if(response.Status==2)
        //   {
        //     this._snackbarService.openSnack(
        //       response.Message,
        //       NotificationTypeEnum.Danger
        //     );
        //   }

        // });


    } ;
  }
}
