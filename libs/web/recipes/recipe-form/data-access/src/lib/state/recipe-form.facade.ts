import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '@onboarding/shared/domain';
import { combineLatest, map } from 'rxjs';
import { RecipeFormActions } from './recipe-form.actions';
import { RecipeFormState } from './recipe-form.reducer';
import { RecipeFormSelectors } from './recipe-form.selectors';

@Injectable()
export class RecipeFormStoreFacade {
  constructor(private store: Store<RecipeFormState>) {}

  ingredients$ = this.store.select(RecipeFormSelectors.ingredientsSelector);

  ingredientsAndRecipeId$ = combineLatest([
    this.ingredients$,
    this.store.select(RecipeFormSelectors.recipeIdSelector),
  ]).pipe(map(([ingredients, recipeId]) => ({ ingredients, recipeId })));

  isNotEnoughIngredients$ = this.ingredients$.pipe(
    map((ingredients) => ingredients.length < 2)
  );

  hasIngredientsBeenModified$ = this.store.select(
    RecipeFormSelectors.hasIngredientsBeenModifiedSelector
  );

  storeRecipeId(id: string) {
    this.store.dispatch(RecipeFormActions.storeRecipeId({ recipeId: id }));
  }

  storeIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(RecipeFormActions.storeIngredients({ ingredients }));
  }

  addIngredient(ingredient: Ingredient) {
    this.store.dispatch(RecipeFormActions.addIngredient({ ingredient }));
  }

  deleteIngredient(id: string) {
    this.store.dispatch(RecipeFormActions.deleteIngredient({ id }));
  }

  editIngredient(ingredient: Ingredient) {
    this.store.dispatch(RecipeFormActions.editIngredient({ ingredient }));
  }
}
