import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

import { ArticlePolitiqueComponent } from './components/article/article-politique/article-politique.component';
import { ArticleJuridiqueComponent } from './components/article/article-juridique/article-juridique.component';
import { ArticleEconomiqueComponent } from './components/article/article-economique/article-economique.component';
import { ContactComponent } from './components/contact/contact.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acceuil', component: AcceuilComponent , canActivate: [AuthGuard], },
 
  { path: 'articles-politiques', component: ArticlePolitiqueComponent },
  { path: 'articles-juridiques', component: ArticleJuridiqueComponent },
  { path: 'articles-economiques', component: ArticleEconomiqueComponent },
  { path: 'contact-nous', component: ContactComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
