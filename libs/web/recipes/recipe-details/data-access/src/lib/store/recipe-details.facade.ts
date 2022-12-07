import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { RecipeDetailsActions } from './recipe-details.actions';
import { RecipeDetailsState } from './recipe-details.reducer';
import { RecipeDetailsSelectors } from './recipe-details.selectors';

@Injectable()
export class RecipeDetailsStoreFacade {
  constructor(private store: Store<RecipeDetailsState>) {}

  vm$ = combineLatest([
    this.store.select(RecipeDetailsSelectors.recipeDetailsSelector),
    this.store.select(RecipeDetailsSelectors.statusSelector),
    this.store.select(RecipeDetailsSelectors.errorSelector),
  ]).pipe(map(([recipe, status, error]) => ({ recipe, status, error })));

  loadRecipeDetails(id: string) {
    this.store.dispatch(RecipeDetailsActions.getRecipeDetails({ id }));
  }

  deteleRecipe(id: string) {
    this.store.dispatch(RecipeDetailsActions.deleteRecipe({ id }));
  }
}
