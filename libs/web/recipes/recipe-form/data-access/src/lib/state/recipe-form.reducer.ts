import { createReducer, on } from '@ngrx/store';
import { Ingredient, Recipe } from '@onboarding/shared/domain';
import { RecipeFormActions } from './recipe-form.actions';

export const RECIPE_FORM_FEATURE_NAME = 'recipeForm';

export interface RecipeFormState {
  recipeInitialValue: Recipe;
  ingredients: Ingredient[];
  hasIngredientsBeenModified: boolean;
}

const emptyRecipe: Recipe = {
  _id: '',
  name: '',
  description: '',
  preparationTimeInMinutes: 30,
  ingredients: [],
};

const initialState: RecipeFormState = {
  recipeInitialValue: emptyRecipe,
  ingredients: [],
  hasIngredientsBeenModified: false,
};

export const recipeFormReducer = createReducer(
  initialState,
  on(RecipeFormActions.initWithEmpty, () => ({ ...initialState })),
  on(RecipeFormActions.storeInitialValue, (state, { recipe }) => ({
    ...state,
    ingredients: [...recipe.ingredients],
    recipeInitialValue: { ...recipe },
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
