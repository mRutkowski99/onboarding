import { createAction, props } from '@ngrx/store';
import { Ingredient, Recipe } from '@onboarding/shared/domain';

enum Types {
  InitWithEmpty = '[Recipe Form] Init With Empty',
  StoreInitialValue = '[Recipe Form] Store Initial Value',
  AddIngredient = '[Recipe Form] Add Ingredient',
  DeleteIngredient = '[Recipe Form] Delete Ingredient',
  EditIngredient = '[Recipe Form] Edit Ingredient',
  ResetState = '[Recipe Form] Reset State',
}

export class RecipeFormActions {
  static initWithEmpty = createAction(Types.InitWithEmpty);

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

  static resetState = createAction(Types.ResetState);
}
