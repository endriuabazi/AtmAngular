import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ActionsComponent } from './Screens/actions/actions.component';
import { ChangePassComponent } from './Screens/change-pass/change-pass.component';
import { EditProfileComponent } from './Screens/edit-profile/edit-profile.component';
import { HomeComponent } from './Screens/home/home.component';
import { LoginComponent } from './Screens/login/login.component';
import { RegisterComponent } from './Screens/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home/:id',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'changePass/:id',
    component: ChangePassComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editProfile/:id',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: 'actions/:id',
    component: ActionsComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
