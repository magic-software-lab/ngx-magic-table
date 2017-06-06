import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemosPageComponent } from './demos-page/demos-page.component';


export function appRoutes() {
  return [
      {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent
      },
      {
        path: 'demos',
        component: DemosPageComponent
      }
    ];
}


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes())
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
