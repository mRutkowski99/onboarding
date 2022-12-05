import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRecipiesShellRoutingModule } from './web-recipes-shell-routing.module';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';

@NgModule({
  imports: [CommonModule, WebRecipiesShellRoutingModule],
  declarations: [RecipesShellContainerComponent],
})
export class WebRecipesShellModule {}
