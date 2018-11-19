import { AccountResolver } from './authentication/services/account.resolver';
import { AuthGuard } from './authentication/services/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { HomeComponent } from './core/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, resolve: {data : AccountResolver }}
];
