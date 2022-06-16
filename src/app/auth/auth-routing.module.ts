import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'register',
        component:RegisterComponent,
      },
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule {}
