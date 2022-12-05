import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WebRecipiesShellRoutingModule } from './web-recipes-shell-routing.module';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';

@NgModule({
  imports: [CommonModule, WebRecipiesShellRoutingModule, MatCardModule],
  declarations: [RecipesShellContainerComponent],
})
export class WebRecipesShellModule {}
