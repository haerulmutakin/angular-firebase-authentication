import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './core/home/home.component';

// services
import { AuthService } from './authentication/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
