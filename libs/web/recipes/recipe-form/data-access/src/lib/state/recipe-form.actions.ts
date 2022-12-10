import { createAction, props } from '@ngrx/store';
import { Ingredient } from '@onboarding/shared/domain';

enum Types {
  StoreRecipeId = '[Recipe Form] Store Recipe Id',
  StoreIngredients = '[Recipe Form] Store Ingredients',
  AddIngredient = '[Recipe Form] Add Ingredient',
  DeleteIngredient = '[Recipe Form] Delete Ingredient',
  EditIngredient = '[Edit Ingredient] Edit Ingredient',
}

export class RecipeFormActions {
  static storeRecipeId = createAction(
    Types.StoreRecipeId,
    props<{ recipeId: string }>()
  );

  static storeIngredients = createAction(
    Types.StoreIngredients,
    props<{ ingredients: Ingredient[] }>()
  );

  static addIngredient = createAction(
    Types.AddIngredient,
    props<{ ingredient: Ingredient }>()
  );

  static deleteIngredient = createAction(
    Types.DeleteIngredient,
    props<{ id: string }>()
  );

  static editIngredient = createAction(
    Types.EditIngredient,
    props<{ ingredient: Ingredient }>()
  );
}
