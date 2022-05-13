import { Component, Injector, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard, OktaAuthService } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'callback', component: OktaCallbackComponent },
  { path: 'calculator',component: CalculatorComponent,canActivate: [OktaAuthGuard],
    data: { onAuthRequired }},
  { path: 'login', component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function onAuthRequired(oktaAuth: OktaAuthService, injector: Injector){
  const router = injector.get(Router);
  router.navigate(['/login']);
}