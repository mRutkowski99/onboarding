import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '@onboarding/shared/domain';
import { RecipeFormActions } from './recipe-form.actions';

export const RECIPE_FORM_FEATURE_NAME = 'recipeForm';

export interface RecipeFormState {
  ingredients: Ingredient[];
  hasIngredientsBeenModified: boolean;
}

const initialState: RecipeFormState = {
  ingredients: [],
  hasIngredientsBeenModified: false,
};

export const recipeFormReducer = createReducer(
  initialState,
  on(RecipeFormActions.storeIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients,
  })),
  on(RecipeFormActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    hasIngredientsBeenModified: true,
    ingredients: [...state.ingredients, ingredient],
  })),
  on(RecipeFormActions.deleteIngredient, (state, { id }) =>
    deleteIngredient(state, id)
  ),
  on(RecipeFormActions.editIngredient, (state, { ingredient }) =>
    editIngredient(state, ingredient)
  )
);

const deleteIngredient = (
  state: RecipeFormState,
  id: string
): RecipeFormState => ({
  ...state,
  hasIngredientsBeenModified: true,
  ingredients: state.ingredients.filter((ingredient) => ingredient._id !== id),
});

const editIngredient = (
  state: RecipeFormState,
  { _id, name, quantity }: Ingredient
): RecipeFormState => ({
  ...state,
  hasIngredientsBeenModified: true,
  ingredients: state.ingredients.map((ingredient) =>
    ingredient._id === _id ? { _id, name, quantity } : ingredient
  ),
});
