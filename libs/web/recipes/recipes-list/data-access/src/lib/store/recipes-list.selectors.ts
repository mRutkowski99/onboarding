import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import {
  RecipesListState,
  RECIPES_LIST_FEATURE_KEY,
} from './recipes-list.reducer';

export class RecipesListSelectors {
  private static featureSelector = createFeatureSelector<RecipesListState>(
    RECIPES_LIST_FEATURE_KEY
  );

  static recipesListSelector = createSelector(this.featureSelector, (state) =>
    this.filterRecipes(state.data, state.filter, state.filterType)
  );

  static statusSelector = createSelector(
    this.featureSelector,
    (state) => state.status
  );

  static errorMessageSelector = createSelector(
    this.featureSelector,
    (state) => state.error
  );

  static selectedItemSelector = createSelector(
    this.featureSelector,
    (state) => state.selectedItem
  );

  static filterSelector = createSelector(
    this.featureSelector,
    (state) => state.filter
  );

  static filterTypeSelector = createSelector(
    this.featureSelector,
    (state) => state.filterType
  );

  private static filterRecipes(
    recipes: Recipe[] | null,
    filter: string,
    filterType: RecipesListFilterTypeEnum
  ): Recipe[] {
    if (recipes === null) return [];

    if (filterType === RecipesListFilterTypeEnum.Name)
      return recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(filter)
      );
    else
      return recipes.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          ingredient.name.toLowerCase().includes(filter)
        )
      );
  }
}
