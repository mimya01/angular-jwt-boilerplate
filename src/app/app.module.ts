import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './_component/home/home.component';
import { LoginComponent } from './_component/auth/login/login.component';
import { RegisterComponent } from './_component/auth/register/register.component';
import { ForgotComponent } from './_component/auth/forgot/forgot.component';
import { HeaderComponent } from './_component/navigation/header/header.component';

import { FormsModule } from '@angular/forms';

import {
  MatButtonModule, MatIconModule,
  MatCardModule, MatInputModule, MatToolbarModule
} from '@angular/material';
import { AuthGuard } from "./_guard/auth.guard";
import { AuthService } from "./_service/auth.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule, MatCardModule, MatInputModule, MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
