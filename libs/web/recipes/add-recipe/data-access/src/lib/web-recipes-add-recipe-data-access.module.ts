import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { AddRecipeDataService } from './services/add-recipe-data.service';
import { AddRecipeStoreFacade } from './store/add-recipe.facade';
import { UtilSnackbarServiceModule } from '@onboarding/web/shared/util-snackbar-service';
import { StoreModule } from '@ngrx/store';
import {
  addRecipeReducer,
  ADD_RECIPE_FEATURE_NAME,
} from './store/add-recipe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AddRecipeEffects } from './store/add-recipe.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    UtilSnackbarServiceModule,
    StoreModule.forFeature(ADD_RECIPE_FEATURE_NAME, addRecipeReducer),
    EffectsModule.forFeature([AddRecipeEffects]),
  ],
  providers: [AddRecipeDataService, AddRecipeStoreFacade],
})
export class WebRecipesAddRecipeDataAccessModule {}
