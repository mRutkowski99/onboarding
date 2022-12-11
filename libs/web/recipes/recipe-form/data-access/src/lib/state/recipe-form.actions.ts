import { createAction, props } from '@ngrx/store';
import { Ingredient, Recipe } from '@onboarding/shared/domain';

enum Types {
  StoreInitialValue = '[Recipe Form] Store Initial Value',
  AddIngredient = '[Recipe Form] Add Ingredient',
  DeleteIngredient = '[Recipe Form] Delete Ingredient',
  EditIngredient = '[Edit Ingredient] Edit Ingredient',
}

export class RecipeFormActions {
  static storeInitialValue = createAction(
    Types.StoreInitialValue,
    props<{ recipe: Recipe }>()
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
