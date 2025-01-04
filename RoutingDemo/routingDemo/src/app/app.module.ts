import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { UsercardComponent } from './usercard/usercard.component';
import { TestService } from './test.service';
import { UserService } from './user.service';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'users',component:UsersComponent
  },
  {
    path:'usercard/:id',component:UsercardComponent
  },
  {
    path:'**',component:NotfoundComponent
  },

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    UsersComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
