import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipesListFilterType } from '@onboarding/web/recipes/recipes-list/util';
import { combineLatest, map } from 'rxjs';
import { RecipesListActions } from './recipes-list.actions';
import { RecipesListState } from './recipes-list.reducer';
import { RecipesListSelectors } from './recipes-list.selectors';

@Injectable()
export class RecipesListFacade {
  constructor(private store: Store<RecipesListState>) {}

  vm$ = combineLatest([
    this.store.select(RecipesListSelectors.recipesListSelector),
    this.store.select(RecipesListSelectors.errorMessageSelector),
    this.store.select(RecipesListSelectors.statusSelector),
  ]).pipe(map(([recipes, error, status]) => ({ recipes, error, status })));

  getRecipesList() {
    this.store.dispatch(RecipesListActions.getRecipesList());
  }

  deleteRecipe(id: string) {
    this.store.dispatch(RecipesListActions.deleteRecipe({ id }));
  }

  provideFilter(filter: string) {
    this.store.dispatch(RecipesListActions.provideFilter({ filter }));
  }

  provideFilterType(filterType: RecipesListFilterType) {
    this.store.dispatch(RecipesListActions.provideFilterType({ filterType }));
  }
}
