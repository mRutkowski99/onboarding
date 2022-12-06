import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsDataService } from './services/recipe-details-data.service';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { RecipeDetailsStoreFacade } from './store/recipe-details.facade';
import { StoreModule } from '@ngrx/store';
import {
  recipeDetailsReducer,
  RECIPE_DETAILS_FEATURE_KEY,
} from './store/recipe-details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipeDetailsEfects } from './store/recipe-details.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    StoreModule.forFeature(RECIPE_DETAILS_FEATURE_KEY, recipeDetailsReducer),
    EffectsModule.forFeature([RecipeDetailsEfects]),
  ],
  providers: [RecipeDetailsDataService, RecipeDetailsStoreFacade],
})
export class WebRecipesRecipeDetailsDataAccessModule {}
