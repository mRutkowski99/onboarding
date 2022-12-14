import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient, Recipe } from '@onboarding/shared/domain';
import { map } from 'rxjs';
import { RecipeFormActions } from './recipe-form.actions';
import { RecipeFormState } from './recipe-form.reducer';
import { RecipeFormSelectors } from './recipe-form.selectors';

@Injectable()
export class RecipeFormStoreFacade {
  constructor(private store: Store<RecipeFormState>) {}

  ingredients: Ingredient[] = [];

  ingredients$ = this.store.select(RecipeFormSelectors.ingredientsSelector);
  recipeInitialValue$ = this.store.select(
    RecipeFormSelectors.recipeInitialValueSelector
  );

  isNotEnoughIngredients$ = this.ingredients$.pipe(
    map((ingredients) => ingredients.length < 2)
  );

  hasIngredientsBeenModified$ = this.store.select(
    RecipeFormSelectors.hasIngredientsBeenModifiedSelector
  );

  private _ = this.ingredients$.subscribe(
    (ingredients) => (this.ingredients = [...ingredients])
  );

  storeInitialValue(recipe: Recipe) {
    this.store.dispatch(RecipeFormActions.storeInitialValue({ recipe }));
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

  resetState() {
    this.store.dispatch(RecipeFormActions.resetState());
  }
}
