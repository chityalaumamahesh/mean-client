import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CrudService } from './crud.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegitsterComponent } from './regitster/regitster.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { CrudComponent } from './crud/crud.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login',pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegitsterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegitsterComponent,
    LoginComponent,
    ProfileComponent,
    ReverseStrPipe,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
    ],
  providers: [DataService, AuthService, AuthGuard, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
