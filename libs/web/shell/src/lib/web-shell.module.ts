import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebShellContainerComponent } from './containers/web-shell-container/web-shell-container.component';
import { WebShellRoutingModule } from './web-shell-routing.module';
import { WebSharedNavbarFeatureComponent } from '@onboarding/web/shared/navbar/feature';

@NgModule({
  imports: [
    CommonModule,
    WebShellRoutingModule,
    WebSharedNavbarFeatureComponent,
  ],
  declarations: [WebShellContainerComponent],
})
export class WebShellModule {}
