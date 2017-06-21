import { NgModule } from '@angular/core';

import { MagicPaginationConfig } from './services/magic-pagination.config';
import { MagicPaginationComponent } from './components/magic-pagination.component';

@NgModule({
  imports: [

  ],
  declarations: [
    MagicPaginationComponent
  ],
  exports: [
    MagicPaginationComponent
  ],
  providers: [
    MagicPaginationConfig
  ]
})
export class MagicPaginationModule {

}
