import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
   path: '',
   pathMatch: 'full',
   redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'create',
    loadChildren: ()=>import('src/app/components/logged-in/logged-in.module').then(m=>m.LoggedInModule)
  },
  {
    path: 'access_denied',
    component: AccessDeniedComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
