import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'account' },
   {path: 'account',loadChildren : () => import('../app/_auth/components/login.module').then(m => m.LoginModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
