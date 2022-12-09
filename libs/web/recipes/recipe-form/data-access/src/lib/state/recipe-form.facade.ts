import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '@onboarding/shared/domain';
import { map } from 'rxjs';
import { RecipeFormActions } from './recipe-form.actions';
import { RecipeFormState } from './recipe-form.reducer';
import { RecipeFormSelectors } from './recipe-form.selectors';

@Injectable()
export class RecipeFormStoreFacade {
  constructor(private store: Store<RecipeFormState>) {}

  ingredients$ = this.store.select(RecipeFormSelectors.ingredientsSelector);
  isNotEnoughIngredients$ = this.ingredients$.pipe(
    map((ingredients) => ingredients.length < 2)
  );
  hasIngredientsBeenModified$ = this.store.select(
    RecipeFormSelectors.hasIngredientsBeenModifiedSelector
  );

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
