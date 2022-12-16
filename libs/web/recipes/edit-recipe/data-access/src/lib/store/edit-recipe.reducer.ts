import { createReducer, on } from '@ngrx/store';
import { Recipe } from '@onboarding/shared/domain';
import { GenericState } from '@onboarding/shared/util';
import { EditRecipeActions } from './edit-recipe.actions';

export const EDIT_RECIPE_FEATURE_KEY = 'editRecipe';

export interface EditRecipeState extends GenericState<Recipe> {
  formDisabled: boolean;
}

const initialState: EditRecipeState = {
  data: null,
  status: 'loading',
  error: null,
  formDisabled: false,
};

export const editRecipeReducer = createReducer(
  initialState,
  on(EditRecipeActions.getRecipe, (state) => ({
    ...state,
    status: 'loading',
    error: null,
    formDisabled: false,
  })),
  on(EditRecipeActions.getRecipeSuccess, (state, { recipe: data }) => ({
    ...state,
    data,
    status: 'success',
  })),
  on(EditRecipeActions.getRecipeFail, (state, { error }) => ({
    ...state,
    error,
  })),
  on(EditRecipeActions.updateRecipe, (state) => ({
    ...state,
    formDisabled: true,
  })),
  on(EditRecipeActions.updateRecipeFail, (state) => ({
    ...state,
    formDisabled: false,
  })),
  on(EditRecipeActions.resetState, () => ({ ...initialState }))
);
