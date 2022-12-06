import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListDataService } from './services/recipe-list-data.service';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { RecipesListStoreFacade } from './store/recipes-list.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  recipesListReducer,
  RECIPES_LIST_FEATURE_KEY,
} from './store/recipes-list.reducer';
import { RecipesListEffects } from './store/recipes-list.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    StoreModule.forFeature(RECIPES_LIST_FEATURE_KEY, recipesListReducer),
    EffectsModule.forFeature([RecipesListEffects]),
  ],
  providers: [RecipeListDataService, RecipesListStoreFacade],
})
export class WebRecipesRecipesListDataAccessModule {}
