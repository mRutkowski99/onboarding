import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  recipeFormReducer,
  RECIPE_FORM_FEATURE_NAME,
} from './state/recipe-form.reducer';
import { RecipeFormStoreFacade } from './state/recipe-form.facade';
import { UniqueRecipeNameService } from './services/uniqe-name.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RECIPE_FORM_FEATURE_NAME, recipeFormReducer),
  ],
  providers: [RecipeFormStoreFacade, UniqueRecipeNameService],
})
export class WebRecipesRecipeFormDataAccessModule {}
