import { AuthGuardGuard } from './auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InstagramComponent } from './instagram/instagram.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AddimagesComponent } from './addimages/addimages.component';
import { RouterModule } from '@angular/router';
 

@NgModule({
  declarations: [
    AppComponent,
    InstagramComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    AddimagesComponent
  ],
  imports: [
    BrowserModule,  CommonModule,FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),RouterModule.forRoot([{path:"",component:HomeComponent},
    {path:"signin",component:SigninComponent},
    {path:"signup", component:SignupComponent},
    {path:"home",component:HomeComponent},
    {path:"instagram",component:InstagramComponent},
    {path:"addimages",component:AddimagesComponent,canActivate:[AuthGuardGuard]},
    {path:'**',component:PagenotfoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
