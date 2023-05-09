import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { StepOneComponent } from './components/create-project/step-one/step-one.component';
import { StepTwoComponent } from './components/create-project/step-two/step-two.component';
import { StepThreeComponent } from './components/create-project/step-three/step-three.component';
import { FundingComponent } from './components/funding/funding.component';
import { PaymentsMethodComponent } from './components/payments-method/payments-method.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"details", component:ProjectDetailsComponent},
  { path: 'create-project', component: CreateProjectComponent, children: [
    { path: 'step-1', component: StepOneComponent },
    { path: 'step-2', component: StepTwoComponent },
    { path: 'step-3', component: StepThreeComponent },
  ]},
  {path:"funding", component:FundingComponent},
  {path:"Payments-method", component:PaymentsMethodComponent},
  {path:"cart", component:CartComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
