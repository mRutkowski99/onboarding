import { createReducer, on } from '@ngrx/store';
import { AddRecipeActions } from './add-recipe.actions';

export const ADD_RECIPE_FEATURE_NAME = 'addRecipe';

export interface AddRecipeState {
  formDisabled: boolean;
}

const initialState: AddRecipeState = {
  formDisabled: false,
};

export const addRecipeReducer = createReducer(
  initialState,
  on(AddRecipeActions.createRecipe, () => ({ formDisabled: true })),
  on(AddRecipeActions.createRecipeFail, () => ({ formDisabled: false })),
  on(AddRecipeActions.resetState, () => ({ ...initialState }))
);
