import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, CarouselModule, AccordionModule,ButtonsModule, BsDatepickerModule, BsDropdownModule  } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { appRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { AuthGuard } from './data-service/auth-guard.service';
import { UserService } from './data-service/user.service';
import { UserApi } from '../fw/users/user-api';
import { PublicComponent } from './public/public.component';
import { FeaturedPanelComponent } from './panels/featured/featured-panel.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ErpSolutionsComponent } from './erp-solutions/erp-solutions.component';
import { ContactComponent } from './contact/contact.component';
import { MscIndiaComponent } from './msc-india/msc-india.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedUserComponent,
    HomeComponent,
    PublicComponent,
    FeaturedPanelComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    ErpSolutionsComponent,
    ContactComponent,
    MscIndiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    CarouselModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthGuard,
    UserService,
    { provide: UserApi, useExisting: UserService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
