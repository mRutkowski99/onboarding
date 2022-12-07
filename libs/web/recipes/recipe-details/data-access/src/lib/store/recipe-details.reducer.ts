import { createReducer, on } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';
import { GenericState } from '@onboarding/shared/util';
import { RecipeDetailsActions } from './recipe-details.actions';

export const RECIPE_DETAILS_FEATURE_KEY = 'recipeDetails';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecipeDetailsState extends GenericState<Recipe> {}

const intialState: RecipeDetailsState = {
  data: null,
  error: null,
  status: 'loading',
};

export const recipeDetailsReducer = createReducer(
  intialState,
  on(RecipeDetailsActions.getRecipeDetails, (state) => ({
    ...state,
    error: null,
    status: 'loading',
  })),
  on(RecipeDetailsActions.getRecipeDetailsSuccess, (state, { data }) => ({
    ...state,
    data,
    status: 'success',
  })),
  on(RecipeDetailsActions.getrecipeDetailsFail, (state, { error }) => ({
    ...state,
    error,
  }))
);
