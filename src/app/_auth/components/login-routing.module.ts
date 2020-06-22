import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',
  pathMatch: 'full',
  redirectTo: 'login'
   },
  {
    path: '',
    component: LoginComponent
  },
   { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
