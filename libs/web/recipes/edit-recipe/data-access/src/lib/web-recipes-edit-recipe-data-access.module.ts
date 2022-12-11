import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@onboarding/shared/data-access';
import { EditRecipeDataService } from './services/edit-recipe-data.service';
import { StoreModule } from '@ngrx/store';
import {
  editRecipeReducer,
  EDIT_RECIPE_FEATURE_KEY,
} from './store/edit-recipe.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EditRecipeEffects } from './store/edit-recipe.effects';
import { EditRecipeStoreFacade } from './store/edit-recipe.facade';
import { UtilSnackbarServiceModule } from '@onboarding/web/shared/util-snackbar-service';

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessModule,
    StoreModule.forFeature(EDIT_RECIPE_FEATURE_KEY, editRecipeReducer),
    EffectsModule.forFeature([EditRecipeEffects]),
    UtilSnackbarServiceModule,
  ],
  providers: [EditRecipeDataService, EditRecipeStoreFacade],
})
export class WebRecipesEditRecipeDataAccessModule {}
