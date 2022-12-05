import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListDataService } from './services/recipe-list-data.service';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
  providers: [RecipeListDataService],
})
export class WebRecipesRecipesListDataAccessModule {}
