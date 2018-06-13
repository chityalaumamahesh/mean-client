import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AuthGuard } from './auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegitsterComponent } from './regitster/regitster.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegitsterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegitsterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true },
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
