import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from "./_helpers/auth.interceptor";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

import { AddArticleComponent } from './components/article/add-article/add-article.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
 
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    NotFoundComponent,
    AddArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }
    ),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
