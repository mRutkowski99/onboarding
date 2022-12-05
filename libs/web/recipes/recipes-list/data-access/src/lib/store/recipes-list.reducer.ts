import { createReducer, on } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';
import { GenericState } from '@onboarding/shared/util';
import { RecipesListFilterTypeEnum } from '@onboarding/web/recipes/recipes-list/util';
import { RecipesListActions } from './recipes-list.actions';

export const RECIPES_LIST_FEATURE_KEY = 'recipesList';

export interface RecipesListState extends GenericState<Recipe[]> {
  filter: string;
  filterType: RecipesListFilterTypeEnum;
}

const initialState: RecipesListState = {
  data: null,
  status: 'loading',
  error: null,
  filter: '',
  filterType: RecipesListFilterTypeEnum.Name,
};

export const recipesListReducer = createReducer(
  initialState,
  on(RecipesListActions.getRecipesList, (state) => ({
    ...state,
    status: 'loading',
    filter: '',
  })),
  on(RecipesListActions.getRecipesListFail, (state, { error }) => ({
    ...state,
    status: 'error',
    error,
  })),
  on(RecipesListActions.getRecipesListSuccess, (state, { data }) => ({
    ...state,
    status: 'success',
    data: [...data],
  })),
  on(RecipesListActions.provideFilter, (state, { filter }) => ({
    ...state,
    filter: filter.toLowerCase(),
  })),
  on(RecipesListActions.provideFilterType, (state, { filterType }) => ({
    ...state,
    filterType,
  }))
);
