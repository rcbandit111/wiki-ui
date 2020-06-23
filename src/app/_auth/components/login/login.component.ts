import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  randomImgURL: any;
  language: string;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  async ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      const name = this.form.get('name').value;
      const password = this.form.get('password').value;
      this.loginService.login(name, password).subscribe(
        () => {
          alert(`name: ${name}, password: ${password}`);
        },
        (error) => {
          alert('error');
          console.log(error);
        }
      );
    }
  }
}
