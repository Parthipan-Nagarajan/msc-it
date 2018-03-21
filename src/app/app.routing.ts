import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './data-service/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ErpSolutionsComponent } from './erp-solutions/erp-solutions.component';
import { ContactComponent } from './contact/contact.component';
import { MscIndiaComponent } from './msc-india/msc-india.component';

export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  {
    path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
        ]
      }
    ]
  },
  {
    path: 'public', component: PublicComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'careers', component: CareersComponent },
          { path: 'erp-solutions', component: ErpSolutionsComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'msc-india', component: MscIndiaComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'public/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'public/home', pathMatch: 'full' }
];