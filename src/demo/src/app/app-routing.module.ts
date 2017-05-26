import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';

export function appRoutes() {
  return [

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
