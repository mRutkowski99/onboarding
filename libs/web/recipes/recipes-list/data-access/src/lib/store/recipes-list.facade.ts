import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import { combineLatest, map } from 'rxjs';
import { RecipesListActions } from './recipes-list.actions';
import { RecipesListState } from './recipes-list.reducer';
import { RecipesListSelectors } from './recipes-list.selectors';

@Injectable()
export class RecipesListStoreFacade {
  constructor(private store: Store<RecipesListState>) {}

  vm$ = combineLatest([
    this.store.select(RecipesListSelectors.recipesListSelector),
    this.store.select(RecipesListSelectors.errorMessageSelector),
    this.store.select(RecipesListSelectors.statusSelector),
    this.store.select(RecipesListSelectors.selectedItemSelector),
  ]).pipe(
    map(([recipes, error, status, selectedId]) => ({
      recipes,
      error,
      status,
      selectedId,
    }))
  );

  filter$ = combineLatest([
    this.store.select(RecipesListSelectors.filterSelector),
    this.store.select(RecipesListSelectors.filterTypeSelector),
  ]).pipe(map(([filter, filterType]) => ({ filter, filterType })));

  getRecipesList() {
    this.store.dispatch(RecipesListActions.getRecipesList());
  }

  deleteRecipe(id: string) {
    this.store.dispatch(RecipesListActions.deleteRecipe({ id }));
  }

  selectItem(id: string) {
    this.store.dispatch(RecipesListActions.selectItem({ id }));
  }

  provideFilter(filter: string) {
    this.store.dispatch(RecipesListActions.provideFilter({ filter }));
  }

  provideFilterType(filterType: RecipesListFilterTypeEnum) {
    this.store.dispatch(RecipesListActions.provideFilterType({ filterType }));
  }
}
