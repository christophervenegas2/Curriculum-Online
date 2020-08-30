import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { InfoComponent } from './features/info/info.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { CertificatesComponent } from './features/certificates/certificates.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'main/info',
    component: InfoComponent
  },
  {
    path: 'main/experiences',
    component: ExperiencesComponent
  },
  {
    path: 'main/certificates',
    component: CertificatesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
