import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './components/intro/intro.component';
import { CanActivateLoginGuard } from './guards/can-activate-login.guard';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path: 'home', component: IntroComponent, canActivate: [CanActivateLoginGuard] },
  { path: 'services', component: CoursesComponent, canActivate: [CanActivateLoginGuard] },
  { path: 'contact', component: FooterComponent, canActivate: [CanActivateLoginGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
