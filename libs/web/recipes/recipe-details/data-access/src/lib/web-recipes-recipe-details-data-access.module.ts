import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsDataService } from './services/recipe-details-data.service';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  providers: [RecipeDetailsDataService],
})
export class WebRecipesRecipeDetailsDataAccessModule {}
