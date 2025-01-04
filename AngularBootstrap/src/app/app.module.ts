import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent,
    IntroComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgxScrollspyModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
