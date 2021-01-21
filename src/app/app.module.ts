import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main.component';
import { InfoComponent } from './features/info/info.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { CertificatesComponent } from './features/certificates/certificates.component';
import { NavbarComponent } from './features/shared/navbar/navbar.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent,
    ExperiencesComponent,
    CertificatesComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    NgbCollapseModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
