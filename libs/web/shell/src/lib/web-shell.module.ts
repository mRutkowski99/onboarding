import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebShellContainerComponent } from './containers/web-shell-container/web-shell-container.component';
import { WebShellRoutingModule } from './web-shell-routing.module';

@NgModule({
  imports: [CommonModule, WebShellRoutingModule],
  declarations: [WebShellContainerComponent],
})
export class WebShellModule {}
