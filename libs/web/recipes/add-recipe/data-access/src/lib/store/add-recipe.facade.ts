import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateUpdateRecipePayload } from '@onboarding/shared/domain';
import { AddRecipeActions } from './add-recipe.actions';
import { AddRecipeState } from './add-recipe.reducer';
import { AddRecipeSelectors } from './add-recipe.selectors';

@Injectable()
export class AddRecipeStoreFacade {
  constructor(private store: Store<AddRecipeState>) {}

  formDisabled$ = this.store.select(AddRecipeSelectors.formDisabledSelector);

  createRecipe(payload: CreateUpdateRecipePayload) {
    this.store.dispatch(AddRecipeActions.createRecipe({ payload }));
  }
}
