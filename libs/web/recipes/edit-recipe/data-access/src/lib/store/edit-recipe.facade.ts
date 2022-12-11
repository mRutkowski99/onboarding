import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { combineLatest, map } from 'rxjs';
import { EditRecipeActions } from './edit-recipe.actions';
import { EditRecipeState } from './edit-recipe.reducer';
import { EditRecipeSelectors } from './edit-recipe.selectors';

@Injectable()
export class EditRecipeStoreFacade {
  constructor(private store: Store<EditRecipeState>) {}

  vm$ = combineLatest([
    this.store.select(EditRecipeSelectors.recipeSelector),
    this.store.select(EditRecipeSelectors.statusSelector),
    this.store.select(EditRecipeSelectors.errorSelector),
    this.store.select(EditRecipeSelectors.formDisabledSelector),
  ]).pipe(
    map(([recipe, status, error, formDisabled]) => ({
      recipe,
      status,
      error,
      formDisabled,
    }))
  );

  getRecipeToUpdate(id: string) {
    this.store.dispatch(EditRecipeActions.getRecipe({ id }));
  }

  updateRecipe(id: string, payload: CreateUpdateRecipePayload) {
    this.store.dispatch(EditRecipeActions.updateRecipe({ id, payload }));
  }
}
