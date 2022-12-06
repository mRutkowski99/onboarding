import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WebRecipiesShellRoutingModule } from './web-recipes-shell-routing.module';
import { RecipesShellContainerComponent } from './containers/recipes-shell-container.component';
import { WebRecipesRecipesListFeatureComponent } from '@onboarding/web/recipes/recipes-list/feature';

@NgModule({
  imports: [
    CommonModule,
    WebRecipiesShellRoutingModule,
    MatCardModule,
    WebRecipesRecipesListFeatureComponent,
  ],
  declarations: [RecipesShellContainerComponent],
})
export class WebRecipesShellModule {}
